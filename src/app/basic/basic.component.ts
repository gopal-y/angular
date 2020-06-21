import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  n: number;
  constructor() {
    this.n = 0;
   }

  ngOnInit() {
  }
  increase() {
    this.n += 1;
  }
  decrease() {
    this.n -= 1;
  }
  reset() {
    this.n = 0;
  }
}
