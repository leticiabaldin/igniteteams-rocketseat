import { getPlayersByGroups } from "./getPlayersByGroup";

export async function getPlayersByGroupAndTeam(groups: string, team: string) {
    try {
        const storage = await getPlayersByGroups(groups); //pega já os players do grupo

        const players = storage.filter(player => player.team === team); //filtra o time

        return players;
    } catch (error) {
        throw error;
    }
}