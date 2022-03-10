package tunest.controller;

import com.rometools.rome.feed.synd.SyndEntry;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;
import org.springframework.web.bind.annotation.*;
import tunest.model.Episode;
import tunest.repository.EpisodeRepository;

import java.net.URL;
import java.util.Date;
import java.util.List;

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
