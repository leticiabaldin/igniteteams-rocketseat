import React from "react";
import { TouchableProps } from "react-native-svg";
import { TouchableOpacityProps } from "react-native/types";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'


type Props = TouchableOpacityProps & {
     icon: keyof typeof MaterialIcons.glyphMap; //entrega os icones disponíveis dentro da lib
     type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props){
    return(
        <Container  {...rest} >
          <Icon 
            name={icon}
            type={type}
          />
        </Container>
    )
}