export type TaskStatus = 'todo' | 'in-progress' | 'review' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface TaskStatusOption {
  value: TaskStatus;
  label: string;
}

export interface TaskPriorityOption {
  value: TaskPriority;
  label: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus: string;
  responsibility: string;
}

export interface TeamTask {
  id: string;
  title: string;
  description: string;
  ownerId: string;
  status: TaskStatus;
  priority: TaskPriority;
}

export interface IntegrationChecklistItem {
  id: string;
  label: string;
  done: boolean;
}
