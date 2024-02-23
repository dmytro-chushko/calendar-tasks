import { FC } from 'react';

import { Oval } from 'react-loader-spinner';

interface IButtonLoaderProps {
  width: string;
  height: string;
}

export const ButtonLoader: FC<IButtonLoaderProps> = ({ width, height }) => {
  return (
    <Oval
      visible={true}
      height={height}
      width={width}
      color="#E5E7EB"
      ariaLabel="oval-loading"
      secondaryColor=""
    />
  );
};
