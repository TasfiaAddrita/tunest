package tunest;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import tunest.model.Podcast;
import tunest.repository.PodcastRepository;

@Component
public class DbSeeder implements CommandLineRunner {
    private PodcastRepository podcastRepository;

    public DbSeeder(PodcastRepository podcastRepository) {
        this.podcastRepository = podcastRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Podcast journal = new Podcast(
                "The Journal",
                "The Wall Street Journal & Gimlet",
                "The most important stories, explained through the lens of business. A podcast about money, business and power. Hosted by Kate Linebaugh and Ryan Knutson. The Journal is a co-production from Gimlet Media and The Wall Street Journal.",
                "https://www.wsj.com/podcasts/the-journal",
                "https://images.wsj.net/im-83637?width=300&height=300&pixel_ratio=2"
        );

        Podcast daily = new Podcast(
                "The Daily",
                "The New York Times",
                "This is what the news should sound like. The biggest stories of our time, told by the best journalists in the world. Hosted by Michael Barbaro. Twenty minutes a day, five days a week, ready by 6 a.m.",
                "https://www.nytimes.com/column/the-daily",
                "https://content-images.p-cdn.com/images/d2/6b/12/9f/4d934d07a758f019333c6de2/_500W_500H.jpg"
        );

        Podcast dropout = new Podcast(
                "The Dropout",
                "ABC News",
                "Money. Romance. Tragedy. Deception. The story of Elizabeth Holmes and Theranos is an unbelievable tale of ambition and fame gone terribly wrong. How did the world’s youngest self-made female billionaire lose it all in the blink of an eye? How did the woman once heralded as “the next Steve Jobs” find herself facing criminal charges — to which she pleaded not guilty — and up to decades in prison? How did her technology, meant to revolutionize health care, potentially put millions of patients at risk? And how did so many smart people get it so wrong along the way?  In “The Dropout,” ABC News chief business, technology and economics correspondent Rebecca Jarvis, along with producers Taylor Dunn and Victoria Thompson, take listeners on a journey that includes a multi-year investigation. You’ll hear exclusive interviews with former employees, investors, and patients, and for the first-time, the never-before-aired deposition testimony of Elizabeth Holmes, and those at the center of this story. Starting August 31st, 2021, in a series of new episodes,  “The Dropout: Elizabeth Holmes on Trial” will take you inside the courtroom, breaking down the evidence and keeping score for both sides until 12 jurors decide the fate of the Theranos founder and new mother. Three years after she was first charged, we find out how this saga finally ends.",
                "https://abcaudio.com/podcasts/the-dropout/",
                "https://megaphone.imgix.net/podcasts/385b7224-a409-11ea-a312-27bb5a0f36e9/image/The_Dropout_Season_2_Podcast_Art_1500.jpg?ixlib=rails-2.1.2&w=400&h=400"
        );

        // drop all podcasts
        this.podcastRepository.deleteAll();

        // add podcasts to db
        this.podcastRepository.save(journal);
        this.podcastRepository.save(daily);
        this.podcastRepository.save(dropout);
    }
}
