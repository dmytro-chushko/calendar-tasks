import * as yup from 'yup';

import { IUpdateTaskForm } from 'src/types';
import { useTranslation } from 'react-i18next';

export const useUpdateTaskSchema = (): yup.ObjectSchema<IUpdateTaskForm> => {
  const { t } = useTranslation();

  return yup.object({
    description: yup
      .string()
      .max(100, t('validation.maxChar', { num: '100' }))
      .required(t('validation.required')),
  });
};
