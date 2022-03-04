package tunest.controller;

import org.springframework.web.bind.annotation.*;
import tunest.model.Podcast;
import tunest.repository.PodcastRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class PodcastController {
    private PodcastRepository podcastRepository;

    public PodcastController(PodcastRepository podcastRepository) {
        this.podcastRepository = podcastRepository;
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
}
