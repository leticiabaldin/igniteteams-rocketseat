import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { getAllGroups } from "./getAllGroups";

export async function groupCreate(newGroupName: string) {
    try {
        const storageGroups = await getAllGroups(); //pega os grupos armazenados no storage do dispositivo

        const groupAreadyExists = storageGroups.includes(newGroupName);
        //verifica se o novo grupo já está incluso na lista

        if (groupAreadyExists) {
            throw new AppError('Esse grupo já existe :(');
        }

        const storage = JSON.stringify([...storageGroups, newGroupName]);
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    } catch (error) {
        throw error;
    }

}