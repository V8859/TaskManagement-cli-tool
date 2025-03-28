export default interface Task {
  id: number;
  title: string;
  completed: boolean;
  creatredAt: Date;
  completedAt: Date | null;
}
