import * as yup from 'yup';

import { ICreateTextLabelForm } from 'src/types';
import { useTranslation } from 'react-i18next';

export const useCreateTextLabelSchema =
  (): yup.ObjectSchema<ICreateTextLabelForm> => {
    const { t } = useTranslation();

    return yup.object({
      text: yup
        .string()
        .max(30, t('validation.maxChar', { num: '30' }))
        .required(t('validation.required')),
    });
  };
