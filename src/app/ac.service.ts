import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Fish,Bug,SeaCreature} from 'src/models/Creatures';

//const base_url = "http://localhost:3000/";
//const heroku_url = "http://localhost:8080/api/v1/ac/";
//const heroku_url = "https://jjz-animal-crossing.herokuapp.com/";
const heroku_url = "https://simple-ttt-api.herokuapp.com/api/v1/ac/";


@Injectable({
	providedIn: 'root'
})
export class AcService {

	constructor(private httpClient: HttpClient) { }

	findFish(): Observable<Fish[]> {
		return this.httpClient.get<Fish[]>(heroku_url + "fish");
	}
	// findBugs(): Observable<Fish[]> {
	// 	return this.httpClient.get<Fish[]>(heroku_url + "fish");
	// }
}
