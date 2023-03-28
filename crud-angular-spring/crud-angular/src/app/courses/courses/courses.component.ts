import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  //declarar o datasource, nesse caso um array de alguma coisa
  courses: Course[] = [
    {_id:'1', name:'Angular', category:'front-end'}
  ]; //do tipo curso, que é uma interface
  displayedColumns = [ 'name', 'category'];

  constructor() {

  // this.courses = [];

  }

  ngOnInit(): void {
  }

}
