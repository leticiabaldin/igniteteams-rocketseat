import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function getAllGroups() {
    try {
        const storage = await AsyncStorage.getItem(GROUP_COLLECTION); //pega o que tem armazenado nessa chave
        
        //verifica o conteúdo do storage e repassa em formato json
        const groups: string[] = storage ? JSON.parse(storage) : [];

        return groups;
    } catch (error) {
        throw error;
    }
}