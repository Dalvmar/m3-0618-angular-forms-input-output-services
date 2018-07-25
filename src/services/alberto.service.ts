import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AlbertoService {

  vueltas: number = 243;

  darVuelta(){
    this.vueltas++;
  }

}
