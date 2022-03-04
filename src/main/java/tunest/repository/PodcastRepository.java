package tunest.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import tunest.model.Podcast;

public interface PodcastRepository extends MongoRepository<Podcast, String> {

}
