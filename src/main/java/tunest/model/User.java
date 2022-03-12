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
    private String email;
    private String firstName;
    private String lastName;
    private Boolean isAdmin;
    private List<Podcast> savedPodcasts;

    public User(String googleId, String email, String firstName, String lastName) {
        this.googleId = googleId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
