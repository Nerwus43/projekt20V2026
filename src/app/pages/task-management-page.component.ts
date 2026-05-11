import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskPriority, TaskStatus, TeamTask } from '../core/task.model';
import { TaskStoreService } from '../core/task-store.service';

@Component({
  selector: 'app-task-management-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-management-page.component.html',
  styleUrl: './management-page.component.css',
})
export class TaskManagementPageComponent {
  protected readonly store = inject(TaskStoreService);
  protected editingTaskId: string | null = null;
  protected taskForm = this.emptyTaskForm();

  protected startAdd(): void {
    this.editingTaskId = null;
    this.taskForm = this.emptyTaskForm();
  }

  protected startEdit(task: TeamTask): void {
    this.editingTaskId = task.id;
    this.taskForm = {
      title: task.title,
      description: task.description,
      ownerId: task.ownerId,
      status: task.status,
      priority: task.priority,
    };
  }

  protected saveTask(): void {
    const task = {
      title: this.taskForm.title.trim(),
      description: this.taskForm.description.trim(),
      ownerId: this.taskForm.ownerId,
      status: this.taskForm.status,
      priority: this.taskForm.priority,
    };

    if (!task.title || !task.description || !task.ownerId) {
      return;
    }

    if (this.editingTaskId) {
      this.store.updateTask(this.editingTaskId, task);
    } else {
      this.store.addTask(task);
    }

    this.startAdd();
  }

  protected deleteTask(taskId: string): void {
    this.store.deleteTask(taskId);
    if (this.editingTaskId === taskId) {
      this.startAdd();
    }
  }

  private emptyTaskForm() {
    return {
      title: '',
      description: '',
      ownerId: this.store.members()[0]?.id ?? '',
      status: 'todo' as TaskStatus,
      priority: 'medium' as TaskPriority,
    };
  }
}
