import { Component } from '@angular/core';

import { TaskBoardComponent } from '../tasks/task-board.component';
import { TeamPanelComponent } from '../team/team-panel.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TaskBoardComponent, TeamPanelComponent],
  template: `
    <section class="layout">
      <app-task-board />
      <app-team-panel />
    </section>
  `,
})
export class HomePageComponent {}
