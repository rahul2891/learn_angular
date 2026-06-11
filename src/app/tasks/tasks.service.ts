import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks = [
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
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter(t => t.userId === userId);
  }

  addTask(taskData: { userId: string; title: string; summary: string; dueDate: string }) {
     this.tasks.unshift({
      id: new Date().getTime().toString(), // Generate a unique ID based on timestamp
      userId: taskData.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}