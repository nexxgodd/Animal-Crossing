import { Component, OnInit } from '@angular/core';
import { AcService } from 'src/app/ac.service';
import { Fish } from 'src/models/Creatures';

@Component({
	selector: 'app-fish',
	templateUrl: './fish.component.html',
	styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {
	fishList:Array<Fish> =[];

	constructor(private acService: AcService,) {}

	ngOnInit(): void {
		console.log(this.fishList);
		
		this.readAll();
	}

	readAll() {
		console.log("reading fish");


		this.acService.findFish().subscribe((data: any) => {
			console.log(data);
			this.fishList=data;
		}, err => {
		});
	}


}
