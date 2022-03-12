package tunest.controller;

import com.rometools.rome.feed.synd.SyndEntry;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;
import org.springframework.web.bind.annotation.*;
import tunest.model.Episode;
import tunest.model.Podcast;
import tunest.repository.EpisodeRepository;
import tunest.repository.PodcastRepository;

import java.net.URL;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1/rss-feed")
@CrossOrigin
public class RSSFeedController {
    public PodcastRepository podcastRepository;
    public EpisodeRepository episodeRepository;

    public RSSFeedController(PodcastRepository podcastRepository, EpisodeRepository episodeRepository) {
        this.podcastRepository = podcastRepository;
        this.episodeRepository = episodeRepository;
    }

    @GetMapping("/podcast")
    public Object fetchPodcastDetails(@RequestParam("url") String rssFeedUrl) {
        try {
            try (XmlReader reader = new XmlReader(new URL(rssFeedUrl))) {
                SyndFeed feed = new SyndFeedInput().build(reader);
                String author = feed.getForeignMarkup().get(4).getValue();
                Podcast podcast = new Podcast(
                        feed.getTitle(),
                        author,
                        feed.getDescription(),
                        feed.getLink(),
                        feed.getImage().getUrl(),
                        rssFeedUrl
                );
                return podcast;
            }
        }  catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @PostMapping("/episodes")
    public String insertEpisodesByRssFeed(@RequestParam("podcastId") String podcastId, @RequestParam("url") String rssFeedUrl) {
        int maxEpisodes = 20;

        try {
            try (XmlReader reader = new XmlReader(new URL(rssFeedUrl))) {
                SyndFeed feed = new SyndFeedInput().build(reader);
                List<SyndEntry> rssFeed = feed.getEntries();
                if (rssFeed.size() > maxEpisodes) {
                    maxEpisodes = rssFeed.size();
                }
                for (int i = 0; i < maxEpisodes; i++) {
                    SyndEntry entry = rssFeed.get(i);
                    Date publishedDate = entry.getPublishedDate();
                    Episode episode = new Episode(
                            podcastId,
                            entry.getTitle(),
                            entry.getDescription().getValue(),
                            entry.getEnclosures().get(0).getUrl(),
                            publishedDate
                    );
                    this.episodeRepository.insert(episode);
                }
                return "Success!";
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "Failed";
    }
}
