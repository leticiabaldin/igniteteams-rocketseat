import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components";
import { css } from "styled-components";
export type ButtonTypeStyleProps ='PRIMARY'| 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps; // eu consigo tipar os componentes do styled também
}

export const Container = styled(TouchableOpacity)<Props>`

    min-height: 56px;    // altura fixa pra não alterar independente do flex
    max-height: 56px;

    background-color: ${({ theme, type }) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

    border-radius: 6px;
    justify-content: center;
    align-items: center;

    margin-top: 20px;

`;

export const Title = styled(Text)`

${({theme}) => css` . // recurso adicional do styled component
    font-size: ${ theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD}
`};

    
`;
