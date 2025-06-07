
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { useEffect, useState, useCallback } from 'react';
import { Container } from './styles';
import { Alert, FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { getAllGroups } from '@storage/group/getAllGroups';
import { Loading } from '@components/Loading';

export function Groups() {

  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState(['rocket', 'teste']);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('newGroup');
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await getAllGroups();
      setGroups(data); //atualiza o estado aqui


    } catch (error) {
      console.log(error);
      Alert.alert('Turmas', 'Não foi possível carregar as turmas. ');
    } finally { //independente do que ocorre, desativa o carregamento
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { groups: group })
  }



  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));
  // o array vazio significa que ele será executado 1x, após a renderização do componente


  return (
    <Container>
      <Header />
      <Highlight
        title='Turmas'
        subtitle='Jogue com a sua turma!'
      />
      {isLoading ? <Loading /> :
        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) =>
            <GroupCard
              title={item}
              onPress={() => handleOpenGroup(item)}
            />}
          contentContainerStyle={groups.length === 0 ? { flex: 1 } : { flex: 0 }}
          ListEmptyComponent={() =>
            <ListEmpty message='Que tal cadastrar a primeira turma?' />}
        />}

      <Button title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>

  );
}
