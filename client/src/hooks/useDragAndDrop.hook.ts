import { DragEvent, useState } from 'react';
import { useReassignDateMutation } from 'src/redux/api/task.api';
import { color } from 'src/styles/consts';

import { ITask } from 'src/types';
import { formatYMDDate } from 'src/utils/helpers';

export const useDragAndDrop = () => {
  const [draggedTaskId, setDraggedTaskId] = useState<string>('');
  const [reassignDate, { isLoading: isReassigningDate }] =
    useReassignDateMutation();

  const handleDragTaskStart = (e: DragEvent<HTMLDivElement>, task: ITask) => {
    console.log(task.id);
    setDraggedTaskId(task.id);
  };

  const handleDragTaskLeave = (e: DragEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).dataset.draggable) {
      (e.target as HTMLDivElement).style.background = 'transparent';
      console.log('Leave');
    }
  };

  const handleDragTaskOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
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
    console.log(draggedTaskId);
  };

  const handleDragToDayCellLeave = (e: DragEvent<HTMLDivElement>) => {
    if ((e.target as HTMLUListElement).dataset.daycell) {
      (e.target as HTMLUListElement).style.background = 'transparent';
    }
  };

  const handleDragToDayCellDrop = async (
    e: DragEvent<HTMLDivElement>,
    date: Date,
  ) => {
    e.preventDefault();
    if ((e.target as HTMLUListElement).dataset.daycell) {
      (e.target as HTMLUListElement).style.background = 'transparent';
    }

    await reassignDate({
      draggableTaskId: draggedTaskId,
      reassignedDate: formatYMDDate(date),
    });
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
