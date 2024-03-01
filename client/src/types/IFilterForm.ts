import { initialColorOptions } from 'src/modules/Header/components/Filter/components/ColorLabelSelect';
import { initialTextLabelOptions } from 'src/modules/Header/components/Filter/components/TextLabelSelect';

export interface IFilterForm {
  taskName: string;
  colorLabel: (typeof initialColorOptions)[] | [];
  textLabel: (typeof initialTextLabelOptions)[] | [];
}
