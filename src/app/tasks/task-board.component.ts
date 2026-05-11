import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskStoreService } from '../core/task-store.service';
import { TaskPriority, TaskStatus } from '../core/task.model';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.css',
})
export class TaskBoardComponent {
  protected readonly store = inject(TaskStoreService);
  protected selectedPriority: TaskPriority | 'all' = 'all';

  protected get filteredTasksByStatus() {
    return this.store.tasksByStatus().map((statusGroup) => ({
      ...statusGroup,
      tasks: statusGroup.tasks.filter(
        (task) => this.selectedPriority === 'all' || task.priority === this.selectedPriority,
      ),
    }));
  }

  protected get priorityOptions() {
    return [{ value: 'all', label: 'Wszystkie priorytety' }, ...this.store.priorities];
  }

  protected getPriorityBadgeClass(priority: TaskPriority): string {
    return `priority-${priority}`;
  }

  protected getStatusBadgeClass(status: TaskStatus): string {
    return `status-${status}`;
  }

  protected getPriorityLabel(priority: TaskPriority): string {
    return this.store.priorities.find((option) => option.value === priority)?.label ?? priority;
  }

  protected getSelectedPriorityLabel(): string {
    return this.priorityOptions.find((option) => option.value === this.selectedPriority)?.label ?? '';
  }
}
