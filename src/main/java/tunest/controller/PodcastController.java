package tunest.controller;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;
import tunest.model.Episode;
import tunest.model.Podcast;
import tunest.repository.EpisodeRepository;
import tunest.repository.PodcastRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class PodcastController {
    private PodcastRepository podcastRepository;
    private EpisodeRepository episodeRepository;
    private MongoTemplate mongoTemplate;

    public PodcastController(PodcastRepository podcastRepository, EpisodeRepository episodeRepository, MongoTemplate mongoTemplate) {
        this.podcastRepository = podcastRepository;
        this.episodeRepository = episodeRepository;
        this.mongoTemplate = mongoTemplate;
    }

    @GetMapping("/podcasts")
    public List<Podcast> getAllPodcasts() {
        List<Podcast> podcasts = this.podcastRepository.findAll();
        return podcasts;
    }

    @GetMapping("/podcast/{id}")
    public Podcast getPodcastById(@PathVariable("id") String id) {
        Podcast podcast = this.podcastRepository.findById(id).orElseThrow();
        return podcast;
    }

    @PostMapping("/podcast")
    public String createPodcast(@RequestBody Podcast podcast) {
        this.podcastRepository.insert(podcast);
        return podcast.getId();
    }

    @GetMapping("/podcast/{podcastId}/episodes")
    public List<Episode> getAllEpisodesByPodcastId(@PathVariable("podcastId") String podcastId, @RequestParam("sort") String sortBy) {
        Query query = new Query();
        Sort sort;
        switch (sortBy) {
            case "titleasc":
                sort = Sort.by(Sort.Direction.ASC, "title");
                break;
            case "titledesc":
                sort = Sort.by(Sort.Direction.DESC, "title");
                break;
            case "dateasc":
                sort = Sort.by(Sort.Direction.ASC, "releaseDate");
                break;
            case "datedesc":
                sort = Sort.by(Sort.Direction.DESC, "releaseDate");
                break;
            default:
                sort = Sort.by(Sort.Direction.ASC, "releaseDate");
                break;
        }
        query.addCriteria(Criteria.where("podcastId").is(podcastId)).with(sort);
        List<Episode> episodes = mongoTemplate.find(query, Episode.class);
        return episodes;
    }
}
