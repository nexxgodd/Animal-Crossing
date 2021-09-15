package fluffy.jambe.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import fluffy.jambe.bean.Bug;

public interface BugRepo extends MongoRepository<Bug,Integer> {

}
