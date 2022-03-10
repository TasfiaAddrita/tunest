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
                        feed.getImage().getUrl()
                );
                return podcast;
            }
        }  catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public void insertEpisodesByRssFeed() {
        int maxEpisodes = 1;

        try {
//            String podcastRssFeedUrl = "https://video-api.wsj.com/podcast/rss/wsj/the-journal";
            String podcastRssFeedUrl = "https://feeds.simplecast.com/54nAGcIl";

            try (XmlReader reader = new XmlReader(new URL(podcastRssFeedUrl))) {
                SyndFeed feed = new SyndFeedInput().build(reader);
                List<SyndEntry> rssFeed = feed.getEntries();
                for (int i = 0; i < maxEpisodes; i++) {
                    SyndEntry entry = rssFeed.get(i);
                    Date publishedDate = entry.getPublishedDate();
                    Episode episode = new Episode(
                            "replace me",
                            entry.getTitle(),
                            entry.getDescription().getValue(),
                            entry.getEnclosures().get(0).getUrl(),
                            publishedDate
                    );
                    this.episodeRepository.insert(episode);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
