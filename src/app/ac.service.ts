import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Fish,Bug,SeaCreature} from 'src/models/Creatures';

const URL = "http://localhost:3000/api/";
//const URL = "http://localhost:8080/api/v1/ac/";
//const URL = "https://jjz-animal-crossing.herokuapp.com/api/";
// const URL = "https://simple-ttt-api.herokuapp.com/api/v1/ac/";


@Injectable({
	providedIn: 'root'
})
export class AcService {
	constructor(private httpClient: HttpClient) { }

	findFish(): Observable<Fish[]> {
		return this.httpClient.get<Fish[]>(URL + "fish");
	}
	findBug(): Observable<Bug[]> {
		return this.httpClient.get<Bug[]>(URL + "bug");
	}
	findSea(): Observable<SeaCreature[]> {
		return this.httpClient.get<SeaCreature[]>(URL + "sea");
	}
}
