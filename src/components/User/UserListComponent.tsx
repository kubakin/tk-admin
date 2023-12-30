import {FC} from "react";
import {Table} from 'antd';

export interface UserListItemInterface {
    id: string;
    phone: string;
    name?: string;
    team: {
        id: string;
        name: string;
    } | null
}

export interface UserListComponentInterface {
    users: UserListItemInterface[];
    loading: boolean;
}

export const UserListComponent: FC<UserListComponentInterface> = (props) => {
    return <Table rowKey={'id'}  loading={props.loading} dataSource={props.users} columns={
        [
            {
                title: 'Phone',
                dataIndex: 'phone',
            },
            {
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Team',
                render: (val) => val?.name,
                dataIndex: 'team',
            }
        ]
    }/>
}