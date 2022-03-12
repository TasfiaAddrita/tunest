package tunest.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document("users")
public class User {

    @Id
    private String id;

    private String googleId;
    private Boolean isAdmin;
    private List<Podcast> savedPodcasts;
}
