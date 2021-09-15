import { Component, OnInit } from '@angular/core';
import fishModel from 'src/models/fishModel';
import { AcDBService } from '../ac-db.service';


const server_url = "mongodb+srv://user:p0tat0e@animalcrossingline.5id29.mongodb.net/ac";
  

@Component({
  selector: 'app-read-data-sample',
  templateUrl: './read-data-sample.component.html',
  styleUrls: ['./read-data-sample.component.css']
})
export class ReadDataSampleComponent implements OnInit {

  oneFish!: fishModel;
  allFish!: fishModel[];

  constructor(
    private acdbService: AcDBService,
  ) { }

  ngOnInit(): void {
  }

  readFish(): any {
    
//     var mongoose = require('mongoose'); 
//     mongoose.connect(server_url).catch(function (reason: any) {
//        console.log('Unable to connect to the mongodb instance. Error: ', reason);
//       });

//     var Fish = mongoose.model("Fish", fishModel);

//     Fish.find((err:any, allFish:fishModel)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(allFish);
//       }
//     });


  }

}
