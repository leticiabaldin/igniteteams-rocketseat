import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { MaterialIcons } from '@expo/vector-icons'
  

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;
    align-items: center;
    margin-left: 16px ;
    justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) =>({ // tipando o type como props
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))`
    
`;
