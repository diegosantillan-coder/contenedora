import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '@core/models/task.model';
import { TaskRepositoryImpl } from '@infraestructure/repositories/task.repository.impl';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.scss'
})
export class ListTasksComponent {
 tasks: Task[] = [];

 constructor(private taskRepository: TaskRepositoryImpl) {}

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
