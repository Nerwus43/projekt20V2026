import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskStoreService } from '../core/task-store.service';
import { TaskStatus, TaskPriority } from '../core/task.model';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.css',
})
export class TaskBoardComponent {
  protected readonly store = inject(TaskStoreService);

  selectedPriority: TaskPriority | 'all' = 'all';

  get filteredTasksByStatus() {
    return this.store.tasksByStatus().map((statusGroup) => ({
      ...statusGroup,
      tasks: statusGroup.tasks.filter((task) => {
        const priorityMatch =
          this.selectedPriority === 'all' || task.priority === this.selectedPriority;
        return priorityMatch;
      }),
    }));
  }

  get priorityOptions() {
    return [{ value: 'all', label: 'Wszystkie priorytety' }, ...this.store.priorities];
  }

  getPriorityBadgeClass(priority: TaskPriority): string {
    return `priority-${priority}`;
  }

  getStatusBadgeClass(status: TaskStatus): string {
    return `status-${status}`;
  }
}
