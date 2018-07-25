import { Component, OnInit } from '@angular/core';
import { AlbertoService } from '../../services/alberto.service';

@Component({
  selector: 'app-alberto',
  templateUrl: './alberto.component.html',
  styleUrls: ['./alberto.component.css'],
})
export class AlbertoComponent implements OnInit {
  constructor(public aS:AlbertoService) { }

  ngOnInit() {
  }


}
