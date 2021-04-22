import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public x: string = 'HEllo minchenok';
  public user = {
    name: 'John',
    age: 23,
  };
  public myColor: string = 'red';
  public myClass: string = 'red';
  constructor() {
    // setTimeout(() => {
    //   this.myClass = 'green';
    //   setTimeout(() => {
    //     this.myClass = 'blue';
    //   }, 2000);
    // }, 2000);
  }

  // random() {
  //   return Math.random();
  // }

  ngOnInit(): void {}
}
