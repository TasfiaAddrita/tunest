package tunest.controller;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;
import tunest.model.User;
import tunest.repository.UserRespository;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin
public class UserController {
    public UserRespository userRespository;
    private MongoTemplate mongoTemplate;

    public UserController(UserRespository userRespository, MongoTemplate mongoTemplate) {
        this.userRespository = userRespository;
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
        } else {
            return "User already exists";
        }
    }
}
