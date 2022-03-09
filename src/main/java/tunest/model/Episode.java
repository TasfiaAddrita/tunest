package tunest.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import tunest.repository.PodcastRepository;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@Document("episodes")
public class Episode {

    @Id
    private String id;

    private String podcastId;
    private String title;
    private String description;
    private String audioLink;
    private Date releaseDate;

    public Episode(String podcastId, String title, String description, String audioLink, Date releaseDate) {
        this.podcastId = podcastId;
        this.title = title;
        this.description = description;
        this.audioLink = audioLink;
        this.releaseDate = releaseDate;
    }

}
