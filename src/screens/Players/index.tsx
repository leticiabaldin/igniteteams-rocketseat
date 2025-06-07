import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { Loading } from "@components/Loading";
import { PLayerCard } from "@components/PlayerCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { removeGroupByName } from "@storage/group/removeGroupByName";
import { getPlayersByGroupAndTeam } from "@storage/players/getPlayersByGroupAndTeam";
import { playerAddByGroup } from "@storage/players/playerAddByGroup";
import { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";
import { removePlayerByGroups } from "@storage/players/removePlayerByGroup";
import theme from "@theme/index";
import { AppError } from "@utils/AppError";
import { useEffect, useState, useRef } from "react";
import { Alert, FlatList, Keyboard, TextInput } from "react-native";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";

type RouteParams = {
    groups: string;
}

export function Players() {

    const [isLoading, setIsLoading] = useState(true);
    const [team, setTeam] = useState('TIME A'); //já abre pré selecionado
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
    const [newPLayerName, setNewPLayerName] = useState('');

    const route = useRoute();
    const { groups } = route.params as RouteParams;

    const navigation = useNavigation();

    const newPlayerInputRef = useRef<TextInput>(null);

    async function handleAddPlayer() {
        if (newPLayerName.trim().length === 0) {
            console.log('deu erro');
            return Alert.alert('Erro ao adicionar.', 'Informe um nome válido para adicionar');
        }

        const newPlayer = {
            name: newPLayerName,
            team,
        }
        try {
            await playerAddByGroup(newPlayer, groups);

            newPlayerInputRef.current?.blur();
            Keyboard.dismiss();

            setNewPLayerName(''); //limpa o conteúdo do status

            fetchPLayersByTeam(); //assim q adiciona uma nova pessoa, a gente recarrega a listagem

        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Erro ao adicionar.', error.message);
            } else {
                console.log(error);
                Alert.alert('Erro ao adiciona.', 'Não foi possível adicionar.');
            }
        }
    }

    //aqui eu busco as informções e atualizo a lista
    async function fetchPLayersByTeam() {
        try {
            setIsLoading(true);

            const playersByTeam = await getPlayersByGroupAndTeam(groups, team);
            setPlayers(playersByTeam);
         
        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao carregar.', 'Não foi possível carregar as pessoas do time selecionado.');
        } finally {
            setIsLoading(false);
        }
    }

    async function handleRemovePlayer(playerName: string) {
        try {

            await removePlayerByGroups(playerName, groups);
            fetchPLayersByTeam();
            Alert.alert('Partipante removido.', `Você removeu ${playerName}.`);


        } catch (error) {
            Alert.alert('Remover', 'Não foi possível remover essa pessoa');
        }
    }

    async function groupRemove() {
        try {

            await removeGroupByName(groups);
            Alert.alert('Turma removida.', `Você removeu ${groups}.`);
            navigation.navigate('groups')


        } catch (error) {
            Alert.alert('Remover', 'Não foi possível remover esse grupo');
        }
    }

    async function handleRemoveGroup() {
        Alert.alert('Remover', 'Deseja remover a turma?', [
            { text: 'Não', style: 'cancel' },
            { text: 'Sim', onPress: () => { groupRemove() } }
        ])
    }

    useEffect(() => {
        fetchPLayersByTeam();
    }, [team]); //array de dependências
    // o team aqui significa: toda vez que o estado mudar, ele será executado dnv

    return (
        <>
            <Container>
                <Header showBackButton />

                <Highlight
                    title={groups}
                    subtitle="Adicione a galera e separe os times" />

                <Form>
                    <Input
                        inputRef={newPlayerInputRef}
                        onChangeText={setNewPLayerName} //mantem o status atualizado
                        value={newPLayerName}
                        placeholder="Nome da pessoa"
                        placeholderTextColor={theme.COLORS.GRAY_200}
                        autoCorrect={false}
                        onSubmitEditing={handleAddPlayer}
                        returnKeyType="done"
                    />

                    <ButtonIcon
                        icon="add"
                        onPress={handleAddPlayer}
                    />
                </Form>

                <HeaderList>
                    {isLoading ? <Loading /> : 
                    <FlatList
                        data={['TIME A', 'TIME B']}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <Filter
                                isActive={item === team}
                                onPress={() => setTeam(item)}
                                title={item} />
                        )}
                        horizontal
                    /> }
                    <NumbersOfPlayers> {players.length}  </NumbersOfPlayers>
                </HeaderList>
                <FlatList
                    data={players}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <PLayerCard name={item.name}
                            onRemove={() => {
                                handleRemovePlayer(item.name)
                            }}
                        />
                    )}

                    ListEmptyComponent={() => (
                        <ListEmpty
                            message='Não há pessoas nesse time :('
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[
                        { paddingBottom: 100 },
                        players.length === 0 && { flex: 1 }
                    ]}
                ></FlatList>

                <Button
                    title="Remover Turma"
                    type="SECONDARY"
                    onPress={handleRemoveGroup}


                />






            </Container>
        </>
    )
}