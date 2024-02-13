import { FC } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { ModalWindow } from 'src/components';

import { common } from 'src/styles/consts';

interface ILoader {
  isShown: boolean;
}

export const Loader: FC<ILoader> = ({ isShown }) => {
  return (
    <ModalWindow isOpen={isShown}>
      <RotatingLines
        strokeColor={common.loader.color}
        strokeWidth={common.loader.strokeWidth}
        animationDuration={common.loader.duration}
        width={common.loader.width}
        visible={true}
      />
    </ModalWindow>
  );
};
