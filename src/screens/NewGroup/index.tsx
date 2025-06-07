import { Highlight } from "@components/Highlight"
import { Header } from "@components/Header"
import { Container, Content, Icon } from "./style"
import { Button } from "@components/Button"
import { Input } from "@components/Input"
import theme from "@theme/index"
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect } from "react"
import { groupCreate } from "@storage/group/groupCreate"
import { AppError } from "@utils/AppError"
import { Alert } from "react-native"


export function NewGroup() {

    const [groups, setGroups] = useState('');
    const navigation = useNavigation();

    async function handleCreateNewGroup() {
        try {

            if (groups.trim().length === 0) {
                return Alert.alert('Não foi possivel criar', 'Informe o nome d aturma.');
            }

            await groupCreate(groups);
            navigation.navigate('players', { groups: groups }) //param. passado aqui
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Não foi possível criar.', error.message)
            } else {
                Alert.alert('Não foi possível criar.', 'Não foi possível criar o grupo.')
                console.log(error);
            }



        }

    }

    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon size={56} />

                <Highlight title="Nova turma"
                    subtitle="Crie a turma para adicionar novas pessoas :)" />

                <Input placeholder="Nome da turma"
                    placeholderTextColor={theme.COLORS.GRAY_200}
                    onChangeText={text => {
                        setGroups(text);
                    }}
                />

                <Button title="Criar"
                    onPress={handleCreateNewGroup}
                ></Button>
            </Content>
        </Container>
    )
}