package tunest.model;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document("podcasts")
public class Podcast {

    @Id
    private String id;

    private String name;
    private String company;
    private String description;
    private String website;
    private String image;
    private String rssFeedUrl;

//    public Podcast(String name, String company, String description, String website, String image) {
//        this.name = name;
//        this.company = company;
//        this.description = description;
//        this.website = website;
//        this.image = image;
//        this.rssFeedUrl = null;
//    }

    public Podcast(String name, String company, String description, String website, String image, String rssFeedUrl) {
        this.name = name;
        this.company = company;
        this.description = description;
        this.website = website;
        this.image = image;
        this.rssFeedUrl = rssFeedUrl;
    }
}
