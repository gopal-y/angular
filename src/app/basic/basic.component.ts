import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  n: number;
  c: number;
  constructor() {
    this.n = 0;
    this.c=0;
   }
    openTab(evt, TabName) {
    // Declare all variables
     // tslint:disable-next-line: one-variable-per-declaration
     let i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
     tabcontent = document.getElementsByClassName('tabcontent');
     for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    // Get all elements with class="tablinks" and remove the class "active"
     tablinks = document.getElementsByClassName('tablinks');
     for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
   // Show the current tab, and add an "active" class to the button that opened the tab
     document.getElementById(TabName).style.display = 'block';
     console.log(document.getElementById(TabName).innerText);
     evt.currentTarget.className += ' active';
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
  colorSwitch() {
    const nod = document.getElementsByTagName('mat-sidenav-content')[0] as HTMLElement;
    this.c += 1;
    switch (this.c) {
      case 1:
        nod.style.background = 'Green';
        break;
      case 2:
        nod.style.background = 'Pink';
        break;
      case 3:
        nod.style.background = 'Orange';
        break;
      default:
        this.c =0;
        this.colorSwitch();
        break;
      
  }
  console.log(this.c);
  }
}
