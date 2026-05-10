import { Component, inject } from '@angular/core';

import { TaskStoreService } from '../core/task-store.service';

@Component({
  selector: 'app-team-panel',
  standalone: true,
  templateUrl: './team-panel.component.html',
  styleUrl: './team-panel.component.css',
})
export class TeamPanelComponent {
  protected readonly store = inject(TaskStoreService);
}
