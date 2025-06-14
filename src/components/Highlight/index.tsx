import { SubTitle, Title, Container } from "./styles";

type Props = {
    title: string;
    subtitle: string;
}

export function Highlight({ title, subtitle}: Props){
    return(
        <Container>
            <Title>
                {title}
            </Title>
            <SubTitle>
                {subtitle}
            </SubTitle>
        </Container>
    )
}