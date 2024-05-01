export enum EBadgeStates {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
}

export interface IProject {
  id: number;
  name: string;
  description?: string;
  image?: string;
  url?: string;
}

export interface ITask {
  id: number;
  title: string;
  isCompleted: boolean;
  projectId: number;
  progress: number;
  created_at: string;
  completed_at?: string | null;
}
