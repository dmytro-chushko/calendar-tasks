import { FC, useEffect, useRef, useState } from 'react';

import { ReactComponent as Submit } from 'src/assets/check-circle.svg';
import { ReactComponent as Edit } from 'src/assets/edit.svg';
import { ReactComponent as Trash } from 'src/assets/trash.svg';
import { ReactComponent as Cancel } from 'src/assets/x-circle.svg';
import { ICreateTextLabelForm, ITextLabel } from 'src/types';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useLoader, useOuterClick } from 'src/hooks';
import {
  useRemoveTextLabelMutation,
  useUpdateTextLabelMutation,
} from 'src/redux/api/textLabel.api';
import { ErrorContainer } from 'src/styles/ui/input.styled';
import { useCreateTextLabelSchema } from 'src/utils/validation';
import {
  ButtonContainer,
  Container,
  TextLabelButton,
  TextLabelContent,
  TextLabelEdit,
  Wrapper,
} from './TextLabelConfigItem.styled';

interface ITextLabelConfigItemProps {
  textLabel: ITextLabel;
}

export const TextLabelConfigItem: FC<ITextLabelConfigItemProps> = ({
  textLabel,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [updateTextLabel, { isLoading: isLabelUpdating }] =
    useUpdateTextLabelMutation();
  const [removeTextLabel, { isLoading: isLabelRemoving }] =
    useRemoveTextLabelMutation();
  const { id, text } = textLabel;
  const schema = useCreateTextLabelSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    reset,
  } = useForm<ICreateTextLabelForm>({
    resolver: yupResolver(schema),
  });

  const handleEditClick = () => setIsEdit(true);

  const handleCloseClick = () => {
    setIsEdit(false);
    reset();
  };

  const handleSubmitClick = handleSubmit(
    async ({ text }: ICreateTextLabelForm) => {
      await updateTextLabel({ id, text });
    },
  );

  const handleRemoveLabelClick = async () => {
    await removeTextLabel(id);
  };

  useOuterClick(containerRef, handleCloseClick);

  useLoader(isLabelUpdating || isLabelRemoving);

  useEffect(() => {
    if (isEdit) setFocus('text');
  }, [isEdit]);

  return (
    <Container>
      <Wrapper ref={containerRef}>
        {isEdit ? (
          <TextLabelEdit
            type="text"
            defaultValue={text}
            $isError={!!errors.text}
            {...register('text')}
            // onBlur={handleCloseClick}
          />
        ) : (
          <TextLabelContent>{text}</TextLabelContent>
        )}
        <ButtonContainer>
          <TextLabelButton
            type="button"
            $width="1.5rem"
            $height="1.5rem"
            onClick={isEdit ? handleSubmitClick : handleEditClick}
          >
            {isEdit ? (
              <Submit width="16" height="16" />
            ) : (
              <Edit width="16" height="16" />
            )}
          </TextLabelButton>
          <TextLabelButton
            type="button"
            $width="1.5rem"
            $height="1.5rem"
            onClick={isEdit ? handleCloseClick : handleRemoveLabelClick}
          >
            {isEdit ? (
              <Cancel width="16" height="16" />
            ) : (
              <Trash width="16" height="16" />
            )}
          </TextLabelButton>
        </ButtonContainer>
      </Wrapper>
      {isEdit && errors.text && (
        <ErrorContainer>{errors.text.message}</ErrorContainer>
      )}
    </Container>
  );
};
