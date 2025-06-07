import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

//buscar os jogadores eplo grupo, pra não perder os que já foram adicionados

export async function getPlayersByGroups(groups: string) {
    try {
        const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${groups}`);

        const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];
        return players;

    } catch (error) {
        throw error;
    }
}