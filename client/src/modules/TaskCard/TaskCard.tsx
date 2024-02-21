import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ReactComponent as Edit } from 'src/assets/edit.svg';
import { ReactComponent as Palette } from 'src/assets/palette.svg';
import { ReactComponent as Tletter } from 'src/assets/t-letter.svg';
import { ReactComponent as Trash } from 'src/assets/trash.svg';
import { useDebounce, useLoader } from 'src/hooks';
import { useOuterClick } from 'src/hooks/useOuterClick.hook';
import {
  useRemoveTaskMutation,
  useUpdateTaskMutation,
} from 'src/redux/api/task.api';
import { ITask, IUpdateTaskForm } from 'src/types';
import { DebounceTime, MaxChar } from 'src/utils/consts';
import { modifyString } from 'src/utils/helpers';
import { useUpdateTaskSchema } from 'src/utils/validation/useUpdateTask.schema';

import { ErrorContainer, Input } from 'src/styles/ui/input.styled';

import { TextLabelModule } from '..';
import { TextLabelAssign } from '../TextLabelModule/TextLabelAssign';
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
  const [isTextLabelModalOpen, setIsTextLabelModalOpen] =
    useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [updateTask] = useUpdateTaskMutation();
  const [removeTask, { isLoading }] = useRemoveTaskMutation();
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

  const buttons = [
    {
      id: 'text-label-button',
      icon: <Tletter width="10" height="10" />,
      handler: () => setIsTextLabelModalOpen(true),
    },
    {
      id: 'color-label-button',
      icon: <Palette width="16" height="16" />,
      handler: () => console.log('color-label'),
    },
    {
      id: 'edit-button',
      icon: <Edit width="16" height="16" />,
      handler: () => {
        setIsEdit(!isEdit);
        reset();
      },
    },
    {
      id: 'remove-button',
      icon: <Trash width="16" height="16" />,
      handler: async () => {
        await removeTask(id);
      },
    },
  ];

  const handleModalClose = () => setIsTextLabelModalOpen(false);

  const handleOuterClick = () => {
    setIsEdit(false);
    reset();
  };

  const onSubmit = async ({ description }: IUpdateTaskForm) => {
    await updateTask({ id, description });
  };

  useOuterClick<HTMLDivElement>(containerRef, handleOuterClick);

  useLoader(isLoading);

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

        <ButtonContainer>
          {buttons.map(({ id, icon, handler }) => (
            <TaskButton
              key={id}
              type="button"
              $width="1.2rem"
              $height="1.2rem"
              onClick={handler}
            >
              {icon}
            </TaskButton>
          ))}
        </ButtonContainer>
      </DescriptionContainer>
      <TextLabelModule isOpen={isTextLabelModalOpen} onClose={handleModalClose}>
        <TextLabelAssign task={task} />
      </TextLabelModule>
    </TaskContainer>
  );
};