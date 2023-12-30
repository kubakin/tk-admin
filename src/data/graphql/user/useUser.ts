import { useQuery } from "@apollo/client"
import { USER_LIST, UserListResponse } from "./query/user.query"

export const useUser = () => {
    const userList = useQuery<UserListResponse>(USER_LIST);
    return {
        userList
    }
}