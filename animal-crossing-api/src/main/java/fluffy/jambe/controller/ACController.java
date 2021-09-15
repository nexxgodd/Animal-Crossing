package fluffy.jambe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fluffy.jambe.bean.Bug;
import fluffy.jambe.bean.Fish;
import fluffy.jambe.bean.SeaCreature;
import fluffy.jambe.repo.BugRepo;
import fluffy.jambe.repo.FishRepo;
import fluffy.jambe.repo.SeaCreatureRepo;

@RestController
@RequestMapping("api/v1/ac")
@CrossOrigin("*")
public class ACController {
	@Autowired
	private FishRepo fishRepo;
	@Autowired
	private BugRepo bugRepo;
	@Autowired
	private SeaCreatureRepo seaRepo;
	
	@GetMapping("/fish")
	public ResponseEntity<List<Fish>> getFish(){
		return new ResponseEntity<>(fishRepo.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/bug")
	public ResponseEntity<List<Bug>> getBugs(){
		return new ResponseEntity<>(bugRepo.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/sea")
	public ResponseEntity<List<SeaCreature>> getSea(){
		return new ResponseEntity<>(seaRepo.findAll(), HttpStatus.OK);
	}

}
