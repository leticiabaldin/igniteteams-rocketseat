import { Title, ButtonTypeStyleProps, Container } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
    type? : ButtonTypeStyleProps; //'primary' e 'secondary'
}

export function Button ({title, type = 'PRIMARY', ...rest}: Props){
    return(
        <Container 
        type={type}
        {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}