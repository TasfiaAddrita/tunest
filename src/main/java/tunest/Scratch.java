package tunest;

import com.rometools.rome.feed.synd.SyndEntry;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;
import tunest.model.Episode;

import java.net.URL;
import java.util.Date;
import java.util.List;

public class Scratch {
    public static void main(String[] args) {
        int maxEpisodes = 1;

        try {
            String podcastRssFeedUrl = "https://video-api.wsj.com/podcast/rss/wsj/the-journal";
//            String podcastRssFeedUrl = "https://feeds.simplecast.com/54nAGcIl";

            try (XmlReader reader = new XmlReader(new URL(podcastRssFeedUrl))) {
                SyndFeed feed = new SyndFeedInput().build(reader);
//                System.out.println(feed.getTitle());
//                System.out.println(feed.getAuthor());
//                System.out.println(feed.getDescription());
//                System.out.println(feed.getLink());
//                System.out.println(feed.getImage().getUrl());
                System.out.println(feed.getForeignMarkup().get(4).getValue());
                List<SyndEntry> rssFeed = feed.getEntries();
//                for (int i = 0; i < maxEpisodes; i++) {
//                    SyndEntry entry = rssFeed.get(i);
//                    Date publishedDate = entry.getPublishedDate();
//                    System.out.println(entry.getForeignMarkup().get(1).getValue());
////                        Episode episode = new Episode(
////                                "replace me",
////                                entry.getTitle(),
////                                entry.getDescription().getValue(),
////                                entry.getEnclosures().get(0).getUrl(),
////                                publishedDate
////                        );
//                }
            }
        }  catch (Exception e) {
            e.printStackTrace();
        }
    }
}
