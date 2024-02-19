import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ReactComponent as Edit } from 'src/assets/edit.svg';
import { ReactComponent as Trash } from 'src/assets/trash.svg';
import { useOuterClick } from 'src/hooks/useOuterClick.hook';
import { ITask, IUpdateTaskForm } from 'src/types';
import { useUpdateTaskSchema } from 'src/utils/validation/useUpdateTask.schema';

import { useDebounce } from 'src/hooks';
import { useUpdateTaskMutation } from 'src/redux/api/task.api';
import { ErrorContainer, Input } from 'src/styles/ui/input.styled';
import { DebounceTime, MaxChar } from 'src/utils/consts';
import { modifyString } from 'src/utils/helpers';
import {
  ButtonContainer,
  DescriptionContainer,
  TaskButton,
  TaskContainer,
  TaskDescription,
} from './TaskCard.styled';

interface ITaskCardProps {
  task: ITask;
}

export const TaskCard: FC<ITaskCardProps> = ({ task }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [updateTask] = useUpdateTaskMutation();
  const schema = useUpdateTaskSchema();
  const { id, description } = task;
  const modifiedDescription = modifyString(description, MaxChar.DESCRIPTION);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    watch,
    reset,
  } = useForm<IUpdateTaskForm>({
    resolver: yupResolver(schema),
  });
  const inputDescription = useDebounce(
    watch('description'),
    DebounceTime.DESCRIPTION,
  );

  const handleEditButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    setIsEdit(!isEdit);
    reset();
  };

  const handleOuterClick = () => {
    setIsEdit(false);
    reset();
  };

  const onSubmit = async ({ description }: IUpdateTaskForm) => {
    await updateTask({ id, description });
  };

  useOuterClick<HTMLDivElement>(containerRef, handleOuterClick);

  useEffect(() => {
    setFocus('description');
  }, [setFocus, isEdit]);

  useEffect(() => {
    if (isEdit) {
      handleSubmit(onSubmit)();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputDescription]);

  return (
    <TaskContainer ref={containerRef}>
      <DescriptionContainer>
        {isEdit ? (
          <>
            <Input
              type="text"
              $isError={!!errors.description}
              defaultValue={description}
              {...register('description')}
            />
            {errors.description && (
              <ErrorContainer>{errors.description.message}</ErrorContainer>
            )}
          </>
        ) : (
          <TaskDescription>{modifiedDescription}</TaskDescription>
        )}
      </DescriptionContainer>
      <ButtonContainer>
        <TaskButton
          type="button"
          $width="1.2rem"
          $height="1.2rem"
          onClick={handleEditButtonClick}
        >
          <Edit width="16" height="16" />
        </TaskButton>
        <TaskButton type="button" $width="1.2rem" $height="1.2rem">
          <Trash width="16" height="16" />
        </TaskButton>
      </ButtonContainer>
    </TaskContainer>
  );
};
