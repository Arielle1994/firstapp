import { Component } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
//property 
title= "student component";
students;
constructor(private studentService: StudentsService){
  this.students= studentService.getStudents();
}
}
