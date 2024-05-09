import { NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Task } from '@core/models/task.model';
import { TaskRepository } from '@core/repositories/task.repository';
import { TaskRepositoryImpl } from '@infraestructure/repositories/task.repository.impl';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [NgFor],
  providers: [
    { provide: TaskRepository, useClass: TaskRepositoryImpl },
   ],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.scss'
})
export class ListTasksComponent implements OnInit {
 tasks: Task[] = [];

 private taskRepository = inject(TaskRepository);

 ngOnInit() {
   this.loadTasks();
 }

 loadTasks(): void {
   this.taskRepository.getTasks().subscribe({
     next: (tasks: Task[]) => {
       this.tasks = tasks;
     },
     error: (error) => {
       console.error('Error al cargar las tareas:', error);
     },
   });
 }
}
