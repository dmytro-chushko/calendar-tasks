export interface ITask {
  id: string;
  description: string;
  order: number;
  assignedDate: string;
  textLabels: string[];
  colorLabels: string[];
}
