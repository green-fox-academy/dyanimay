import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: string;
  timeMessage: string;
  someNumber: number = 10;

  constructor() { 
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString();
      this.timeMessage = currentDate.toLocaleTimeString();
    } , 1000)
  }

  ngOnInit() {
  }

  addTwoNumbers(a: number, b:number) {
    return a + b;
  }

  someOtherMethod() {
    this.addTwoNumbers(this.someNumber, 5);
  }
}
