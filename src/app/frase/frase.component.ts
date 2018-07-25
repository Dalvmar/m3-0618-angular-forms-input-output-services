import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent implements OnInit, OnDestroy, OnChanges {

  @Input() texto: string = "Frase lapidaria de Giorgio"
  @Input() popularidad: number = 5;
  @Input() id: number;
  @Output() onDelete = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit: quote-item component');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: quote-item component');
  }

  ngOnChanges(change) {
    console.log('ngOnChanges: quote-item component', change);
  }

  noMeMola(){
    console.log(`La frase "${this.texto}" no me mola ID:${this.id}`);
    this.onDelete.emit(this.id);
  }

}
