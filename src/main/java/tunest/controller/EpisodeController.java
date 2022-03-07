package tunest.controller;

import org.springframework.web.bind.annotation.*;
import tunest.model.Episode;
import tunest.repository.EpisodeRepository;

@RestController
@RequestMapping("/api/v1/episode")
@CrossOrigin
public class EpisodeController {
    public EpisodeRepository episodeRepository;

    public EpisodeController(EpisodeRepository episodeRepository) {
        this.episodeRepository = episodeRepository;
    }

    @PostMapping("/create-episode")
    public void createEpisode(@RequestBody Episode episode) {
        this.episodeRepository.insert(episode);
    }
}
