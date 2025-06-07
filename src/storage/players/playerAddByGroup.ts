import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { getPlayersByGroups } from "./getPlayersByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, groups: string) {
    try {

        const storedPlayers = await getPlayersByGroups(groups);

        //verifica todos os nomes de players
        const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name);

        if (playerAlreadyExists.length > 0) {
            throw new AppError('Erro ao adicionar Player.Essa pessoa já está cadastrada.');
        }

        //pega tudo que já existe e adiciona o novo jogador
        const storage = JSON.stringify([...storedPlayers, newPlayer]);

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${groups}`, storage); //retorna tudo

    } catch (error) {
        throw error;
    }
}