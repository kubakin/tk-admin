import {Table} from "antd";
import {FC} from "react";

export interface AttemptItemInterface {
    id: string
}

interface AttemptsTableInterface {
    data: AttemptItemInterface[]
}

export const AttemptsTable: FC<AttemptsTableInterface> = (props) => {
    return <Table rowKey={'id'} dataSource={props.data} columns={
        [
            {
                title: 'ID',
                dataIndex: 'id',
            },
            // {
            //     title: 'Name',
            //     dataIndex: 'name',
            // },
            // {
            //     title: 'Team',
            //     render: (val) => val?.name,
            //     dataIndex: 'team',
            // }
        ]
    }/>
}