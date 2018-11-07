import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  private fontSize: number;
  private color: string;
  private defaultColor: string;

  constructor() {
    this.fontSize = 12;
    this.color = "green";
    this.defaultColor = "blue";
  }

  ngOnInit() {
  }

}
