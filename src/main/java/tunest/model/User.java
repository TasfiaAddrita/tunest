package tunest.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Collections;
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
        this.isAdmin = false;
        this.savedPodcasts = new ArrayList<>();
    }

    public void setSavedPodcasts(Podcast podcast) {
        this.savedPodcasts.add(podcast);
    }
}
