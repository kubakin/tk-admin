import {FC} from "react";
import {Table} from 'antd';

export interface TeamListItemInterface {
    id: string;
    name: string;
    admin: {
        id: string;
        name: string;
        phone: string;
    } | null
}

export interface TeamListInterface {
    users: TeamListItemInterface[];
    loading: boolean;
}

export const TeamList: FC<TeamListInterface> = (props) => {
    return <Table rowKey={'id'}  loading={props.loading} dataSource={props.users} columns={
        [
            {
                title: 'name',
                dataIndex: 'name',
            },
            {
                title: 'Admin',
                render: (val) => val?.name,
                dataIndex: 'admin',
            },
            {
                title: 'Created at',
                dataIndex: 'createdAt',
            },
           
        ]
    }/>
}