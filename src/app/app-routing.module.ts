import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BugsComponent } from './page-components/bugs/bugs.component';
import { FishComponent } from './page-components/fish/fish.component';
import { SeaCreaturesComponent } from './page-components/sea-creatures/sea-creatures.component';

const routes: Routes = [
  {path:'', component:  HomeComponent},
  {path:'fish', component:  FishComponent},
  {path:'bug', component:  BugsComponent},
  {path:'sea', component:  SeaCreaturesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
