import { Injectable, computed, signal } from '@angular/core';

import {
  IntegrationChecklistItem,
  TaskPriorityOption,
  TaskStatus,
  TaskStatusOption,
  TeamMember,
  TeamTask,
} from './task.model';

export const TASK_STATUS_OPTIONS: TaskStatusOption[] = [
  { value: 'todo', label: 'Do zrobienia' },
  { value: 'in-progress', label: 'W trakcie' },
  { value: 'review', label: 'Do sprawdzenia' },
  { value: 'done', label: 'Gotowe' },
];

export const TASK_PRIORITY_OPTIONS: TaskPriorityOption[] = [
  { value: 'low', label: 'Niski' },
  { value: 'medium', label: 'Sredni' },
  { value: 'high', label: 'Wysoki' },
];

@Injectable({ providedIn: 'root' })
export class TaskStoreService {
  private readonly membersState = signal<TeamMember[]>([
    {
      id: 'person-1',
      name: 'Osoba 1',
      role: 'Modul zadan',
      focus: 'Lista zadan, statusy, priorytety',
      responsibility: 'Rozwija pliki w src/app/tasks i nie zmienia integracji bez ustalenia.',
    },
    {
      id: 'person-2',
      name: 'Osoba 2',
      role: 'Modul zespolu',
      focus: 'Czlonkowie, role, dostepnosc',
      responsibility: 'Rozwija pliki w src/app/team i korzysta ze wspolnego modelu danych.',
    },
    {
      id: 'person-3',
      name: 'Osoba 3',
      role: 'Integracja',
      focus: 'Polaczenie widokow, spojne dane, finalny test',
      responsibility: 'Pilnuje src/app/core, src/app/integration oraz glownego ekranu aplikacji.',
    },
  ]);

  private readonly tasksState = signal<TeamTask[]>([
    {
      id: 'task-1',
      title: 'Przygotowac tablice zadan',
      description: 'Kolumny statusow, karta zadania i prosta zmiana statusu.',
      ownerId: 'person-1',
      status: 'in-progress',
      priority: 'high',
    },
    {
      id: 'task-2',
      title: 'Przygotowac panel zespolu',
      description: 'Lista osob, role, krotki opis odpowiedzialnosci.',
      ownerId: 'person-2',
      status: 'todo',
      priority: 'medium',
    },
    {
      id: 'task-3',
      title: 'Polaczyc moduly w ekran glowny',
      description: 'Ujednolicic dane, style, routing i sprawdzic uruchomienie.',
      ownerId: 'person-3',
      status: 'review',
      priority: 'high',
    },
  ]);

  readonly members = this.membersState.asReadonly();
  readonly tasks = this.tasksState.asReadonly();
  readonly statuses = TASK_STATUS_OPTIONS;
  readonly priorities = TASK_PRIORITY_OPTIONS;
  readonly openTasksCount = computed(
    () => this.tasks().filter((task) => task.status !== 'done').length,
  );
  readonly doneTasksCount = computed(
    () => this.tasks().filter((task) => task.status === 'done').length,
  );
  readonly completionPercent = computed(() => {
    const tasks = this.tasks();
    return tasks.length === 0 ? 0 : Math.round((this.doneTasksCount() / tasks.length) * 100);
  });
  readonly tasksByStatus = computed(() =>
    this.statuses.map((status) => ({
      ...status,
      tasks: this.tasks().filter((task) => task.status === status.value),
    })),
  );
  readonly tasksByOwner = computed(() =>
    this.members().map((member) => ({
      member,
      tasks: this.tasks().filter((task) => task.ownerId === member.id),
    })),
  );
  readonly integrationChecklist = computed<IntegrationChecklistItem[]>(() => [
    {
      id: 'shared-model',
      label: 'Wspolny model danych jest w src/app/core',
      done: true,
    },
    {
      id: 'separate-workspaces',
      label: 'Osoba 1 i Osoba 2 maja osobne foldery pracy',
      done: true,
    },
    {
      id: 'main-screen',
      label: 'Glowny ekran laczy zadania, zespol i podsumowanie',
      done: true,
    },
    {
      id: 'final-browser-test',
      label: 'Finalny test w przegladarce po pracy osob 1 i 2',
      done: false,
    },
  ]);

  memberName(ownerId: string): string {
    return this.members().find((member) => member.id === ownerId)?.name ?? 'Nieprzypisane';
  }

  statusLabel(status: TaskStatus): string {
    return this.statuses.find((option) => option.value === status)?.label ?? status;
  }
}
