import { Container, Title, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native/types";

type Props = TouchableOpacityProps & { //pega as props originais
    title: string;
}

export function GroupCard({ title, ...rest }: Props){
    return(
        <Container {...rest}>
              <Icon></Icon>
            <Title>
                {title}
            </Title>
          
        </Container>
    )
}