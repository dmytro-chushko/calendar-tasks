import { IColor, color } from './consts/color';
import { ICommon, common } from './consts/common';
import { IFont, font } from './consts/font';
import { ISize, size } from './consts/size';

export interface ITheme {
  color: IColor;
  font: IFont;
  size: ISize;
  common: ICommon;
}

export const theme = (): ITheme => ({
  color,
  font,
  size,
  common,
});
