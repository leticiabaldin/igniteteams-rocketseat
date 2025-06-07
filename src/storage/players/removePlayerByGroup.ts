import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { getPlayersByGroups } from "./getPlayersByGroup";

export async function removePlayerByGroups(playerName: string, groups: string) {
    try {
        const storage = await getPlayersByGroups(groups);

        const filtered = storage.filter(player => player.name != playerName) // todos os players menos oq eu quero remover


        const players = JSON.stringify(filtered);

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${groups}`, players)

        return players;

    } catch (error) {
        throw error;
    }
}