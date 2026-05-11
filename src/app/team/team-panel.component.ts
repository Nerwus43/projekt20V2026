import { Component } from '@angular/core';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  responsibilities: string;
  available: boolean;
  assignedTask?: string;
}
@Component({
  selector: 'app-team-panel',
  standalone: true,
  templateUrl: './team-panel.component.html',
  styleUrls: ['./team-panel.component.css'],
})
export class TeamPanelComponent {
  // lista członków zespołu jest tymczasowa i lokalna.
  members: TeamMember[] = [
    {
      id: 1,
      name: 'Osoba 1',
      role: 'Moduł zadań',
      responsibilities: 'Lista zadań, statusy, priorytety',
      available: true,
      assignedTask: ''
    },
    {
      id: 2,
      name: 'Osoba 2',
      role: 'Moduł zespołu',
      responsibilities: 'Członkowie, role, dostępność',
      available: true,
      assignedTask: ''
    },
    {
      id: 3,
      name: 'Osoba 3',
      role: 'Integracja',
      responsibilities: 'Łączenie modułów i wspólne dane',
      available: false,
      assignedTask: 'Integracja widoków'
    }
  ];

  assignTask(member: TeamMember): void {
    const task = prompt('Wpisz nazwę zadania');
    if (task) {
      member.assignedTask = task;
      member.available = false;
    }
  }

  clearTask(member: TeamMember): void {
    member.assignedTask = '';
    member.available = true;
  }
}
