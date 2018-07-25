import { Routes } from "@angular/router";
import { MyhomeComponent } from "./myhome/myhome.component";
import { MyaboutComponent } from "./myabout/myabout.component";
import { ListaFrasesComponent } from "./lista-frases/lista-frases.component";
import { VelodromoComponent } from "./velodromo/velodromo.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'giorgio', component: ListaFrasesComponent, },
  { path: 'home',  component: MyhomeComponent},
  { path: 'about/:name', component: MyaboutComponent },
  { path: 'velodromo', component: VelodromoComponent }
];
