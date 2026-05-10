import { Component, inject } from '@angular/core';

import { TaskStoreService } from '../core/task-store.service';

@Component({
  selector: 'app-task-board',
  standalone: true,
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.css',
})
export class TaskBoardComponent {
  protected readonly store = inject(TaskStoreService);
}
