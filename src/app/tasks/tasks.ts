import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'Summary of Task 1',
      dueDate: '2024-07-01',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Task 2',
      summary: 'Summary of Task 2',
      dueDate: '2024-07-05',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Task 3',
      summary: 'Summary of Task 3',
      dueDate: '2024-07-10',
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter(t => t.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }

  onStartAddTask() {  
    // Logic to start adding a new task for the user
    this.isAddingTask = true;
  }
}
