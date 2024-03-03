import { DragEvent } from 'react';
import {
  useReassignDateMutation,
  useReassignOrderMutation,
} from 'src/redux/api/task.api';
import { useGetDraggableTaskId, useSetDraggableTaskId } from 'src/redux/hooks';
import { color } from 'src/styles/consts';

import { ITask } from 'src/types';
import { formatYMDDate } from 'src/utils/helpers';
import { useLoader } from '.';

export const useDragAndDrop = () => {
  const { id } = useGetDraggableTaskId();
  const setDraggableTaskId = useSetDraggableTaskId();
  const [reassignDate, { isLoading: isReassigningDate }] =
    useReassignDateMutation();
  const [reassignOrder, { isLoading: isReassigningOrder }] =
    useReassignOrderMutation();

  const handleDragTaskStart = (e: DragEvent<HTMLDivElement>, task: ITask) => {
    setDraggableTaskId(task.id);
  };

  const handleDragTaskLeave = (e: DragEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).dataset.draggable) {
      (e.target as HTMLDivElement).style.background = 'transparent';
    }
  };

  const handleDragTaskOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if ((e.target as HTMLDivElement).dataset.draggable) {
      (e.target as HTMLDivElement).style.background = color.accent;
    }
  };

  const handleDrop = async (e: DragEvent<HTMLDivElement>, task: ITask) => {
    e.preventDefault();
    e.stopPropagation();
    if ((e.target as HTMLDivElement).dataset.draggable) {
      (e.target as HTMLDivElement).style.background = 'transparent';
    }
    if (task.id !== id) {
      await reassignOrder({
        draggableTaskId: id,
        reassignedDate: task.assignedDate,
        reassignedOrder: task.order,
      });
    }
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

  const handleDragToDayCellDrop = async (
    e: DragEvent<HTMLDivElement>,
    date: Date,
  ) => {
    e.preventDefault();
    if ((e.target as HTMLUListElement).dataset.daycell) {
      (e.target as HTMLUListElement).style.background = 'transparent';
    }

    await reassignDate({
      draggableTaskId: id,
      reassignedDate: formatYMDDate(date),
    });
  };

  useLoader(isReassigningDate || isReassigningOrder);

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
