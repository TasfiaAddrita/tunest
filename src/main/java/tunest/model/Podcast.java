package tunest.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Podcast {

    @Id
    private String id;

    private String name;
    private String company;
    private String description;
    private String website;
    private String image;

    public Podcast(String name, String company, String description, String website, String image) {
        this.name = name;
        this.company = company;
        this.description = description;
        this.website = website;
        this.image = image;
    }
}
