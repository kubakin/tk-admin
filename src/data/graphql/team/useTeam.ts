import { useQuery } from "@apollo/client"
import { TEAM_LIST, TeamListResponse } from "./query/team.query"

export const useTeam = () => {
    const teamList = useQuery<TeamListResponse>(TEAM_LIST);
    return {
        teamList
    }
}