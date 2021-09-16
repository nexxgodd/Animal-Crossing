import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalCrossingComponent } from './animal-crossing/animal-crossing.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TicTakToeComponent } from './tic-tak-toe/tic-tak-toe.component';

const routes: Routes = [
  {path:'home', component:  HomeComponent},
  {path:'animal', component:  AnimalCrossingComponent},
  {path:'tic', component:  TicTakToeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
