import { FC, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Loader } from 'src/components';
import { AppRoute } from 'src/utils/consts';
import { MonthOrWeekSwitcher } from './components/MonthOrWeekSwithcer';

import { ButtonWrapper, Container } from 'src/styles/ui/container.styled';
import { CommonWrapper, HeaderContainer, LinkButton } from './Header.styled';

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = ({}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleMonthClick = () => navigate(AppRoute.MONTH);

  const handleWeekClick = () => navigate(AppRoute.WEEK);

  return (
    <Container>
      <HeaderContainer>
        <CommonWrapper>
          <MonthOrWeekSwitcher />
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
      </HeaderContainer>
      <Suspense fallback={<Loader isShown />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
