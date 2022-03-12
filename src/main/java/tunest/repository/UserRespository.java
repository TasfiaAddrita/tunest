package tunest.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import tunest.model.User;

public interface UserRespository extends MongoRepository<User, String> {
}
