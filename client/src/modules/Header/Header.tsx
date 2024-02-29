import { FC, Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Loader } from 'src/components';
import { AppRoute } from 'src/utils/consts';
import { CurrentDateLabel } from './components/CurrentDateLabel';
import { MonthOrWeekSwitcher } from './components/MonthOrWeekSwithcer';
import { WeekDays } from './components/WeekDays';

import { size } from 'src/styles/consts';
import {
  ButtonWrapper,
  Container,
  FlexBox,
} from 'src/styles/ui/container.styled';
import { TextLabelModule } from '..';
import { TextLabelConfig } from '../TextLabelModule/TextLabelConfig';
import { CommonWrapper, HeaderContainer, LinkButton } from './Header.styled';
import { ConfigTextLabelButton } from './components/ConfigTextLabelButton';
import { Filter } from './components/Filter';

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = ({}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isTextLabelConfigOpen, setIsTextLabelConfigOpen] =
    useState<boolean>(false);

  const handleMonthClick = () => navigate(AppRoute.MONTH);

  const handleWeekClick = () => navigate(AppRoute.WEEK);

  return (
    <Container>
      <HeaderContainer>
        <CommonWrapper>
          <FlexBox style={{ gap: size.general.m }}>
            <MonthOrWeekSwitcher />
            <ConfigTextLabelButton onClick={setIsTextLabelConfigOpen} />
            <Filter />
          </FlexBox>
          <CurrentDateLabel />
          <ButtonWrapper>
            <LinkButton
              type="button"
              $height="2rem"
              $width="3.5rem"
              disabled={AppRoute.WEEK === pathname}
              onClick={handleWeekClick}
            >
              {t('weekButton')}
            </LinkButton>
            <LinkButton
              type="button"
              $height="2rem"
              $width="3.5rem"
              disabled={AppRoute.MONTH === pathname}
              onClick={handleMonthClick}
            >
              {t('monthButton')}
            </LinkButton>
          </ButtonWrapper>
        </CommonWrapper>
        <WeekDays />
      </HeaderContainer>
      <Suspense fallback={<Loader isShown />}>
        <Outlet />
      </Suspense>
      <TextLabelModule
        isOpen={isTextLabelConfigOpen}
        onClose={setIsTextLabelConfigOpen}
      >
        <TextLabelConfig />
      </TextLabelModule>
    </Container>
  );
};
