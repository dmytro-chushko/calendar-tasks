import * as yup from 'yup';

import { useTranslation } from 'react-i18next';
import { useGetAllTextLabelsQuery } from 'src/redux/api/textLabel.api';
import { ICreateTextLabelForm } from 'src/types';

export const useCreateTextLabelSchema =
  (): yup.ObjectSchema<ICreateTextLabelForm> => {
    const { t } = useTranslation();
    const { data: textLabels } = useGetAllTextLabelsQuery();
    const labelList = textLabels ? textLabels.map(({ text }) => text) : [];

    return yup.object({
      text: yup
        .string()
        .max(30, t('validation.maxChar', { num: '30' }))
        .notOneOf(labelList, t('validation.labelExist'))
        .required(t('validation.required')),
    });
  };
