import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListaFrasesComponent } from './lista-frases/lista-frases.component';
import { FraseComponent } from './frase/frase.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { MyaboutComponent } from './myabout/myabout.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { VelodromoComponent } from './velodromo/velodromo.component';
import { AlbertoComponent } from './alberto/alberto.component';
import { AlbertoService } from '../services/alberto.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListaFrasesComponent,
    FraseComponent,
    MyhomeComponent,
    MyaboutComponent,
    VelodromoComponent,
    AlbertoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
