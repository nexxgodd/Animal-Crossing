package fluffy.jambe.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import fluffy.jambe.bean.Fish;

public interface FishRepo extends MongoRepository<Fish,Integer> {

}
