import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  date: number = 0;
  constructor() { }

  ngOnInit(): void {
    let finalDate: Date = new Date("05/26/2024");
    let currentDate: Date = new Date();
    this.date = Math.floor((finalDate.getTime() - currentDate.getTime())/ (1000 * 3600 * 24));
    // console.log(finalDate.getTime());
    // console.log(currentDate.getTime());
    console.log(this.date);
  }

}
