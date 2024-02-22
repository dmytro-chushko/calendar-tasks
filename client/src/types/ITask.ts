import { IColorLabel, ITextLabel } from '.';

export interface ITask {
  id: string;
  description: string;
  order: number;
  assignedDate: string;
  textLabels: ITextLabel[];
  colorLabels: IColorLabel[];
}
