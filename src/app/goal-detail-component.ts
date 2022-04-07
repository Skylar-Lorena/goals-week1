import { Component, OnInit, Input } from '@angular/core';
import { Goal } from './goal'

@Component({
  selector: 'app-goal-detail',
  templateUrl:'./goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit  {
    @Input() goal: Goal | undefined;
    constructor() { }
  
    ngOnInit() {
    }
}
