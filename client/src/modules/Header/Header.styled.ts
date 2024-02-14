import { Button } from 'src/styles/ui/button.styled';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin-bottom: ${({ theme }) => theme.size.general.xs};
`;

export const CommonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: ${({ theme }) => theme.size.general.xs};
`;

export const LinkButton = styled(Button)`
  &:disabled {
    color: ${({ theme }) => theme.font.color.accent};
    background-color: ${({ theme }) => theme.color.accent};
  }
`;
