import { Component, inject } from '@angular/core';

import { TaskStoreService } from '../core/task-store.service';

@Component({
  selector: 'app-team-panel',
  standalone: true,
  templateUrl: './team-panel.component.html',
  styleUrls: ['./team-panel.component.css'],
})
export class TeamPanelComponent {
  protected readonly store = inject(TaskStoreService);

  protected activeTasksFor(memberId: string) {
    return this.store.tasks().filter((task) => task.ownerId === memberId && task.status !== 'done');
  }

  protected isAvailable(memberId: string): boolean {
    return this.activeTasksFor(memberId).length === 0;
  }
}
