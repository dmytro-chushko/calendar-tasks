export interface ITask {
  id: string;
  description: string;
  order: number;
  assignedDate: string;
  textLabels: { id: string; text: string }[];
  colorLabels: string[];
}
