import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myabout',
  templateUrl: './myabout.component.html',
  styleUrls: ['./myabout.component.css']
})
export class MyaboutComponent implements OnInit {

  name: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.name = params.name
    });
    this.route.queryParams.subscribe((qParams) => {
      console.log(qParams);
    });
  }

  ngOnInit() {
  }

}
