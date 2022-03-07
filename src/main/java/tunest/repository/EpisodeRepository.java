package tunest.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import tunest.model.Episode;

public interface EpisodeRepository extends MongoRepository<Episode, String> {
}
