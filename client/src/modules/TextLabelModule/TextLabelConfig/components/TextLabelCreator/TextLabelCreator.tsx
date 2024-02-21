import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ReactComponent as Create } from 'src/assets/check-circle.svg';
import { ICreateTextLabelForm } from 'src/types';

import { useLoader } from 'src/hooks';
import { useCreateTextLabelMutation } from 'src/redux/api/textLabel.api';
import { Button } from 'src/styles/ui/button.styled';
import { ErrorContainer } from 'src/styles/ui/input.styled';
import { useCreateTextLabelSchema } from 'src/utils/validation';
import { Container, TextLabelInput } from './TextLabelCreator.styled';

export const TextLabelCreator: FC = () => {
  const { t } = useTranslation();
  const [createTextLaael, { isLoading, isSuccess }] =
    useCreateTextLabelMutation();
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

  const handleClickSubmit = handleSubmit(
    async ({ text }: ICreateTextLabelForm) => {
      await createTextLaael({ text });
    },
  );

  useLoader(isLoading);

  useEffect(() => {
    setFocus('text');
  }, []);

  useEffect(() => {
    if (isSuccess) reset({ text: '' });
  }, [isSuccess]);

  return (
    <>
      <Container>
        <TextLabelInput
          type="text"
          placeholder={t('placeholder.textLabelInput')}
          $isError={!!errors.text}
          {...register('text')}
        />
        <Button
          type="button"
          $width="2rem"
          $height="2rem"
          onClick={handleClickSubmit}
        >
          <Create width="24" height="24" />
        </Button>
      </Container>
      {errors.text && <ErrorContainer>{errors.text.message}</ErrorContainer>}
    </>
  );
};
