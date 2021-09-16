import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadDataSampleComponent } from './read-data-sample/read-data-sample.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TicTakToeComponent } from './tic-tak-toe/tic-tak-toe.component';
import { AnimalCrossingComponent } from './animal-crossing/animal-crossing.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ReadDataSampleComponent,
    NavigationComponent,
    TicTakToeComponent,
    AnimalCrossingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
