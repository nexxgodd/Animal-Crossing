import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Fish from 'src/models/Fish';

const base_url = "http://localhost:3000/";
const heroku_url = "https://jjz-animal-crossing.herokuapp.com/"


@Injectable({
  providedIn: 'root'
})
export class AcService {

  constructor(private httpClient: HttpClient) { }

  findFish() : Observable<Fish[]> {
    return this.httpClient.get<Fish[]>(heroku_url + "api");
  }
}
