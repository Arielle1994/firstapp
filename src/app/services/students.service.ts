import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students=[
    {name: "john wick", age: 34, department: "Math"},
    {name: "jeff wick", age: 45, department: "Art"},
    {name: "josh wick", age: 34, department: "Math"},
  ];

  constructor() { }

  //method
  getStudents() {
  return this.students;
  }
}
