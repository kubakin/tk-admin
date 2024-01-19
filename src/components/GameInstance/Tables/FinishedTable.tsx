import { Dropdown, Table } from 'antd';
import { FC } from 'react';
import {
  TaskInstanceItemInterface,
  TaskInstanceTable,
} from './TaskInstanceTable';
import PendingDropdown from '../Actions/PendingDropdown';
import FinishedDropdown from '../Actions/FinishedDropdown';

export interface FinishedGameInstanceItemInterface {
  id: string;
  score: number;
  team: {
    id: string;
    name: string;
  };
}

interface FinishedGameInstanceTableInterface {
  data: FinishedGameInstanceItemInterface[];
  loading: boolean;
}

export const FinishedTable: FC<FinishedGameInstanceTableInterface> = (
  props,
) => {
  return (
    <Table
      title={() => {
        return 'Finished';
      }}
      rowKey={'id'}
      dataSource={props.data}
      columns={[
        {
          title: 'Team',
          dataIndex: 'team',
          render: (val) => val?.name,
        },
        {
          title: 'Score',
          dataIndex: 'score',
        },
        {
          title: 'Status',
          dataIndex: 'status',
        },
        {
          title: 'Actions',
          dataIndex: 'id',
          render: (it) => <FinishedDropdown id={it} />,
        },
      ]}
    />
  );
};
