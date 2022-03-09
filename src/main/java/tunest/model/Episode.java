package tunest.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
import tunest.repository.PodcastRepository;

import java.time.LocalDateTime;

@Data
@Document("episodes")
public class Episode {

    @Id
    private String id;

    private String podcastId;
    private String title;
    private String description;
    private String audioLink;
    private LocalDateTime releaseDate;

    public Episode(String podcastId, String title, String description, String audioLink) {
        this.podcastId = podcastId;
        this.title = title;
        this.description = description;
        this.audioLink = audioLink;
        this.releaseDate = LocalDateTime.now();
    }

}
