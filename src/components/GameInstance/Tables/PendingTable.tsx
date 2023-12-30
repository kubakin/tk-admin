import { Table } from 'antd';
import { FC } from 'react';
import {
  TaskInstanceItemInterface,
  TaskInstanceTable,
} from './TaskInstanceTable';

export interface PendingGameInstanceItemInterface {
  id: string;
  score: number;
  team: {
    id: string;
    name: string;
  };
}

interface PendingGameInstanceTableInterface {
  data: PendingGameInstanceItemInterface[];
  loading: boolean;
}

export const PendingTable: FC<PendingGameInstanceTableInterface> = (props) => {
  return (
    <Table
      rowKey={'id'}
      dataSource={props.data}
      columns={[
        {
          title: 'Team',
          dataIndex: 'team',
          render: (val) => val?.name,
        },
        {
          title: 'Status',
          dataIndex: 'status',
        },
        {
          title: 'Created',
          dataIndex: 'createdAt',
        },
      ]}
    />
  );
};
