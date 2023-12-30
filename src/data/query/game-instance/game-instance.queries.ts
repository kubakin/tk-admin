import {GameInstanceListResult} from "./game-instance.result";
import {gameInstanceAdminApiInstance} from "./game-instance.base";

export const gameInstanceList = async (): Promise<GameInstanceListResult> => {
    const rs = await gameInstanceAdminApiInstance.get<GameInstanceListResult>('');
    return rs.data
}