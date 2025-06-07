import styled, { css } from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

export type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  height: 38px;
  width: 70px;
  border-radius: 4px;
  margin-right: 12px;
  margin-top: 12px;

  align-items: center;
  justify-content: center;

  ${({ theme, isActive }) =>  //aqui faz a verificação se está selecionado
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}
`;

export const Title = styled(Text)`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `};
`;