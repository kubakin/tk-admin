import {UserListComponent} from "../../components/User/UserListComponent";
import {useEffect} from "react";
import AdminLayout from "../../components/Layout";
import { useUser } from "../../data/graphql/user/useUser";

export const UserPage = () => {
    const {userList: {data, loading}} = useUser()
    return <AdminLayout>
        <UserListComponent loading={loading} users={data?.admin_user_list}/>
    </AdminLayout>
}