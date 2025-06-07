import { Title } from "@components/GroupCard/styles";
import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps } from "./styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
  
}


export function Filter ({ title, isActive, ...rest}: Props){
    return(
        <Container
        {...rest}
        isActive= {isActive}
        >
            <Title>
                {title}
            </Title>
        </Container>
    );
}



