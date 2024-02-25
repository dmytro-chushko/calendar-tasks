import { yupResolver } from '@hookform/resolvers/yup';
import { DragEventHandler, FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ReactComponent as Edit } from 'src/assets/edit.svg';
import { ReactComponent as Palette } from 'src/assets/palette.svg';
import { ReactComponent as Tletter } from 'src/assets/t-letter.svg';
import { ReactComponent as Trash } from 'src/assets/trash.svg';
import { useDebounce } from 'src/hooks';
import {
  useRemoveTaskMutation,
  useUpdateTaskMutation,
} from 'src/redux/api/task.api';
import { ITask, IUpdateTaskForm } from 'src/types';
import { DebounceTime, MaxChar } from 'src/utils/consts';
import { modifyString } from 'src/utils/helpers';
import { useUpdateTaskSchema } from 'src/utils/validation/useUpdateTask.schema';
import { ColorLabelModule } from '../ColorLabelModule';

import { DropDownContainer, OuterClickWrapper } from 'src/components';
import { TextLabelAssign } from '../TextLabelModule/TextLabelAssign';

import { ButtonLoader } from 'src/components/ButtonLoader/ButtonLoader';
import { ButtonCover } from 'src/styles/ui/button.styled';
import { ErrorContainer, Input } from 'src/styles/ui/input.styled';
import {
  ButtonContainer,
  ColorLabelContent,
  DescriptionContainer,
  ItemCover,
  LabelWrapper,
  TaskButton,
  TaskContainer,
  TaskDescription,
  TextLabelContent,
} from './TaskCard.styled';

interface ITaskCardProps {
  task: ITask;
  onDragStart?: DragEventHandler<HTMLDivElement>;
  onDragLeave?: DragEventHandler<HTMLDivElement>;
  onDragEnd?: DragEventHandler<HTMLDivElement>;
  onDragOver?: DragEventHandler<HTMLDivElement>;
  onDrop?: DragEventHandler<HTMLDivElement>;
}

export const TaskCard: FC<ITaskCardProps> = ({ task, ...props }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isColorLabelOpen, setIsColorLabelOpen] = useState<boolean>(false);
  const [isTextLabelModalOpen, setIsTextLabelModalOpen] =
    useState<boolean>(false);
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
      handler: () => setIsTextLabelModalOpen(state => !state),
    },
    {
      id: 'color-label-button',
      icon: <Palette width="16" height="16" />,
      handler: () => setIsColorLabelOpen(state => !state),
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
      icon: isLoading ? (
        <ButtonLoader width="1rem" height="1rem" />
      ) : (
        <Trash width="16" height="16" />
      ),
      handler: async () => {
        await removeTask(id);
      },
    },
  ];

  const handleColorLabelOuterClick = () => setIsColorLabelOpen(false);

  const handleTextLabelClose = () => setIsTextLabelModalOpen(false);

  const handleOuterClick = () => {
    setIsEdit(false);
    reset();
  };

  const onSubmit = async ({ description }: IUpdateTaskForm) => {
    await updateTask({ id, description });
  };

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
    <TaskContainer draggable {...props}>
      <LabelWrapper>
        {task.colorLabels.map(({ id, color }) => (
          <ColorLabelContent key={id} $color={color} />
        ))}
      </LabelWrapper>
      <DescriptionContainer>
        {isEdit ? (
          <OuterClickWrapper
            onOuterClick={handleOuterClick}
            exception="edit-button"
          >
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
          </OuterClickWrapper>
        ) : (
          <TaskDescription>{modifiedDescription}</TaskDescription>
        )}

        <ButtonContainer style={{ zIndex: '1' }}>
          {buttons.map(({ id, icon, handler }) => (
            <TaskButton
              key={id}
              type="button"
              $width="1.2rem"
              $height="1.2rem"
              onClick={handler}
            >
              {icon}
              <ButtonCover data-label={id} />
            </TaskButton>
          ))}
        </ButtonContainer>
        <DropDownContainer
          isShown={isColorLabelOpen}
          onOuterClick={handleColorLabelOuterClick}
          exception="color-label-button"
        >
          <ColorLabelModule task={task} />
        </DropDownContainer>
        <DropDownContainer
          isShown={isTextLabelModalOpen}
          onOuterClick={handleTextLabelClose}
          exception="text-label-button"
        >
          <TextLabelAssign task={task} />
        </DropDownContainer>
      </DescriptionContainer>
      <LabelWrapper>
        {task.textLabels.map(({ id, text }) => (
          <TextLabelContent key={id}>{text}</TextLabelContent>
        ))}
      </LabelWrapper>
      {!isEdit && <ItemCover data-draggable />}
    </TaskContainer>
  );
};
