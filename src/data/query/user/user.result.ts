export interface UserTeam {
    id: string;
    name: string;
}

export interface UserListItem {
    id: string;
    phone: string;
    team: UserTeam | null;
}

export interface UserListResult {
    data: UserListItem[];
}
