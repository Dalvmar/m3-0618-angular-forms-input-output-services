import { Component, OnInit, Input } from '@angular/core';

interface Frase {
  id: number;
  superfrase: string;
  popularidad: number;
}


@Component({
  selector: 'app-lista-frases',
  templateUrl: './lista-frases.component.html',
  styleUrls: ['./lista-frases.component.css']
})
export class ListaFrasesComponent implements OnInit {

  @Input() frases: Array<Frase> = [
    {
      id: 0,
      superfrase: "OW YEAH!!!",
      popularidad: 9
    },
    {
      id: 1,
      superfrase: "PABLOWSKI",
      popularidad: 4
    },
    {
      id: 2,
      superfrase: "GRACHHHHHIIEEE!",
      popularidad: 6
    },
    {
      id: 3,
      superfrase: "ME GUSTA LA PIZZA CON PIÑA.... QUE RICA!!!",
      popularidad: 10
    }
  ];

  constructor() {}

  ngOnInit() {
  }

  eliminar(id){
    console.log(`Eliminar la frase porfavor con ID: ${id}`);
    this.frases = this.frases.filter(e => e.id != id);
  }

}
