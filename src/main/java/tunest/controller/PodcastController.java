package tunest.controller;

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
    public void createPodcast(@RequestBody Podcast podcast) {
        this.podcastRepository.insert(podcast);
    }

    @GetMapping("/podcast/{podcastId}/episodes")
    public List<Episode> getAllEpisodesByPodcastId(@PathVariable("podcastId") String podcastId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("podcastId").is(podcastId));
        List<Episode> episodes = mongoTemplate.find(query, Episode.class);
        return episodes;
    }
}
