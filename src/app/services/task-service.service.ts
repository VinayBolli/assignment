import { Injectable } from '@angular/core';
import { Status, Task } from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  // Example of tasks
  tasks: Task[] = [
    { title: "Education--open", description: "Education is Open", date: new Date(), status: "Open" },
    { title: "Education--open(1)", description: "Education is Open(1)", date: new Date(), status: "Open" },
    { title: "Education--in progress", description: "Education is in_progress", date: new Date(), status: "In-progress" },
    { title: "Education--in progress(1)", description: "Education is in_progress(1)", date: new Date(), status: "In-progress" },
    { title: "Education--Completed", description: "Education is Completed", date: new Date(), status: "Completed" }

  ];

  open: Task[] = [

    { title: "Education--open", description: "Education is Open", date: new Date(), status: "Open" },
    { title: "Education(1)--open", description: "Education is Open(1)", date: new Date(), status: "Open" }

  ];
  
  in_progress: any[] = [
    { title: "Education--in progress", description: "Education is in_progress", date: new Date(), status: "In-progress" },
    { title: "Education--in progress(1)", description: "Education is in_progress(1)", date: new Date(), status: "In-progress" }
  ];
  complete: any[] = [
    { title: "Education--Completed", description: "Education is Completed", date: new Date(), status: "Completed" }
  ];


  constructor() { }

  // add task to tasks array
  addTask(task: Task) {
    this.tasks.push(task)

    if (task.status == Status.open) {
      this.open.push(task)
      console.log(this.open)
    } else if (task.status == Status.in_progress) {
      this.in_progress.push(task)
      console.log(this.in_progress)
    } else if (task.status == Status.completed) {
      this.complete.push(task)
      console.log(this.complete)
    }
  }

  // return all tasks from tasks array
  getAllTask() {
    return this.tasks
  }

  // change status of tasks after drag and drop
  changeStatus() {
    this.open.map((item, index) => {
      if (item.status != Status.open) {
        item.status = Status.open
        this.tasks.map((task, index) => {
          if (item.title === task.title) {
            task.status = Status.open
          }
        })
      }
    })
    this.in_progress.map((item, index) => {
      if (item.status != Status.in_progress) {
        item.status = Status.in_progress
        this.tasks.map((task, index) => {
          if (item.title === task.title) {
            task.status = Status.in_progress
          }
        })
      }
    })
    this.complete.map((item, index) => {
      if (item.status != Status.completed) {
        item.status = Status.completed
        this.tasks.map((task, index) => {
          if (item.title === task.title) {
            task.status = Status.completed
          }
        })
      }
    })
  }
}
