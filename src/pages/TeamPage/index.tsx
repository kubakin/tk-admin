import {UserListComponent} from "../../components/User/UserListComponent";
import {useEffect} from "react";
import AdminLayout from "../../components/Layout";
import { useUser } from "../../data/graphql/user/useUser";
import { useTeam } from "../../data/graphql/team/useTeam";
import { TeamList } from "../../components/Team/TeamList";

export const TeamPage = () => {
    const {teamList: {data, loading}} = useTeam()
    return <AdminLayout>
        <TeamList loading={loading} users={data?.team_list}/>
    </AdminLayout>
}