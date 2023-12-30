import {userAdminApiInstance} from "./user.base";
import {UserListResult} from "./user.result";

export const userList = async (): Promise<UserListResult> => {
    const rs = await userAdminApiInstance.get<UserListResult>('');
    return rs.data
}