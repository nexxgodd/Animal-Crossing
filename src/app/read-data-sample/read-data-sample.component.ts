import { Component, OnInit } from '@angular/core';
// import Fish from 'src/models/Fish';
// import fishModel from 'src/models/Fish';
import { AcService } from '../ac.service';


@Component({
  selector: 'app-read-data-sample',
  templateUrl: './read-data-sample.component.html',
  styleUrls: ['./read-data-sample.component.css']
})
export class ReadDataSampleComponent implements OnInit {


  constructor(
    private acService: AcService,
  ) { }

  ngOnInit(): void {
  }

  readFish(): any {

    console.log("hit the btn for fish");


    this.acService.findFish().subscribe( (data:any) => {
      console.log(data);

    }, err => {
    });
  }

}
