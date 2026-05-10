import { Component, inject } from '@angular/core';

import { TaskStoreService } from '../core/task-store.service';

@Component({
  selector: 'app-summary-panel',
  standalone: true,
  templateUrl: './summary-panel.component.html',
  styleUrl: './summary-panel.component.css',
})
export class SummaryPanelComponent {
  protected readonly store = inject(TaskStoreService);
}
