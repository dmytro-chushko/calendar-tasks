import 'styled-components';
import { ITheme } from './theme.styled';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
