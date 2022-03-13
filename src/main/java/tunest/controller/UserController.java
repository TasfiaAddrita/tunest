package tunest.controller;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;
import tunest.model.Podcast;
import tunest.model.User;
import tunest.repository.PodcastRepository;
import tunest.repository.UserRespository;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin
public class UserController {
    public UserRespository userRespository;
    public PodcastRepository podcastRepository;
    private MongoTemplate mongoTemplate;

    public UserController(UserRespository userRespository, PodcastRepository podcastRepository, MongoTemplate mongoTemplate) {
        this.userRespository = userRespository;
        this.podcastRepository = podcastRepository;
        this.mongoTemplate = mongoTemplate;
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody User newUser) {
        String googleId = newUser.getGoogleId();
        Query query = new Query();
        query.addCriteria(Criteria.where("googleId").is(googleId));
        User findUser = mongoTemplate.findOne(query, User.class);
        if (findUser == null) {
            this.userRespository.insert(newUser);
            return "New user registered!";
//            return newUser.getId();
        } else {
            return "User already exists";
//            return findUser.getId();
        }
    }

    @GetMapping("/saved-podcasts/{googleId}")
    public List<Podcast> getUserSavedPodcasts(@PathVariable("googleId") String googleId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("googleId").is(googleId));
        User user = mongoTemplate.findOne(query, User.class);
        System.out.println("GET" + user.getSavedPodcasts());
        return user.getSavedPodcasts();
    }

    @PostMapping("/saved-podcasts/{googleId}")
    public String savePodcastToUser(@PathVariable("googleId") String googleId, @RequestBody String podcastId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("googleId").is(googleId));
        User user = mongoTemplate.findOne(query, User.class);

        Podcast podcast = podcastRepository.findById(podcastId).orElseThrow();

//        user.getSavedPodcasts().add(podcast);
//        user.setSavedPodcasts(user.getSavedPodcasts());
        user.setSavedPodcasts(podcast);
        System.out.println("POST" + user.getSavedPodcasts());
        return "Successfully saved podcast to user profile!";
    }
}
