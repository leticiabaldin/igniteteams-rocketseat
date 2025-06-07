import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles";

type Props = {
    name: string;
    onRemove: () => void;
}

export function PLayerCard ({ name, onRemove }: Props){
    return(
        <Container>
            <Icon name="person"></Icon>
            <Name>{name}</Name>

            <ButtonIcon icon="close" type="SECONDARY"
            onPress={onRemove}
            ></ButtonIcon>
        </Container>
    )
}