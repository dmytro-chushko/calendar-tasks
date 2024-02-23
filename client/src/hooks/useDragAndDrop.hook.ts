import { DragEvent, useState } from 'react';
import { color } from 'src/styles/consts';

import { ITask } from 'src/types';

export const useDragAndDrop = () => {
  const [draggedTaskId, setDraggedTaskId] = useState<string>('');

  const handleDragTaskStart = (e: DragEvent<HTMLDivElement>, task: ITask) => {
    console.log('DragStart');
  };

  const handleDragTaskLeave = (e: DragEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).dataset.draggable) {
      (e.target as HTMLDivElement).style.background = 'transparent';
      console.log('Leave');
    }
  };

  const handleDragTaskOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e.target);
    if ((e.target as HTMLDivElement).dataset.draggable) {
      (e.target as HTMLDivElement).style.background = color.accent;
      console.log('Over');
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, task: ITask) => {
    e.preventDefault();
    if ((e.target as HTMLDivElement).dataset.draggable) {
      (e.target as HTMLDivElement).style.background = 'transparent';
    }

    // if (draggedCard?.draggedId !== card.id) {
    //   updateCardOrder({
    //     id: id || '',
    //     ...draggedCard,
    //     swappedId: card.id,
    //     swappedStatus: card.status,
    //   });
    // }
  };

  const handleDragToDayCellOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if ((e.target as HTMLDivElement).dataset.daycell) {
      (e.target as HTMLDivElement).style.background = color.accent;
    }
  };

  const handleDragToDayCellLeave = (e: DragEvent<HTMLDivElement>) => {
    if ((e.target as HTMLUListElement).dataset.daycell) {
      (e.target as HTMLUListElement).style.background = 'transparent';
    }
  };

  const handleDragToDayCellDrop = (
    e: DragEvent<HTMLDivElement>,
    date: Date,
  ) => {
    e.preventDefault();
    if ((e.target as HTMLUListElement).dataset.daycell) {
      (e.target as HTMLUListElement).style.background = 'transparent';
    }
  };

  return {
    handleDragTaskStart,
    handleDragTaskLeave,
    handleDragTaskOver,
    handleDrop,
    handleDragToDayCellOver,
    handleDragToDayCellLeave,
    handleDragToDayCellDrop,
  };
};
