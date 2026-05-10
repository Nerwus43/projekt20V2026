import { Component } from '@angular/core';

import { SummaryPanelComponent } from './integration/summary-panel.component';
import { TaskBoardComponent } from './tasks/task-board.component';
import { TeamPanelComponent } from './team/team-panel.component';

@Component({
  selector: 'app-root',
  imports: [TaskBoardComponent, TeamPanelComponent, SummaryPanelComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
