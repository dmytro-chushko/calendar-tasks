import { FC } from 'react';

import { useLoader } from 'src/hooks';
import { useGetAllTextLabelsQuery } from 'src/redux/api/textLabel.api';
import { size } from 'src/styles/consts';
import { TextLabelConfigItem } from './components/TextLabelConfigItem';
import { TextLabelCreator } from './components/TextLabelCreator';

import { TextLabelList } from './TextLabelConfig.styled';

export const TextLabelConfig: FC = () => {
  const { data: textLabels, isLoading } = useGetAllTextLabelsQuery();

  useLoader(isLoading);

  return (
    <>
      <div style={{ marginBottom: size.general.xs }}>
        <TextLabelCreator />
      </div>
      <TextLabelList as="ul">
        {textLabels &&
          textLabels.length > 0 &&
          textLabels.map(textLabel => (
            <TextLabelConfigItem key={textLabel.id} textLabel={textLabel} />
          ))}
      </TextLabelList>
    </>
  );
};
