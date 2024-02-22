import { FC, useRef } from 'react';
import { useOuterClick } from 'src/hooks';

interface IOuterClickWrapperProps {
  children: React.ReactNode;
  onOuterClick: () => void;
  exception?: string;
}

export const OuterClickWrapper: FC<IOuterClickWrapperProps> = ({
  children,
  onOuterClick,
  exception,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useOuterClick(containerRef, onOuterClick, exception);

  return <div ref={containerRef}>{children}</div>;
};
