package fluffy.jambe.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import fluffy.jambe.bean.SeaCreature;

public interface SeaCreatureRepo  extends MongoRepository<SeaCreature,Integer> {

}
