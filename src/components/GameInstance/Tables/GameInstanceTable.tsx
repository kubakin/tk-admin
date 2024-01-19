import { Table } from 'antd';
import { FC } from 'react';
import {
  TaskInstanceItemInterface,
  TaskInstanceTable,
} from './TaskInstanceTable';
import { TeamField } from '../../../common/fields/TeamField';

export interface GameInstanceItemInterface {
  id: string;
  score: number;
  team: {
    id: string;
    name: string;
  };
  game: {
    id: string;
    name: string;
  };
  taskInstances: TaskInstanceItemInterface[];
}

interface GameInstanceTableInterface {
  data: GameInstanceItemInterface[];
  loading: boolean;
}

export const GameInstanceTable: FC<GameInstanceTableInterface> = (props) => {
  return (
    <Table
      expandedRowRender={(r) => TaskInstanceTable({ data: r.taskInstances })}
      title={() => {
        return 'In progress';
      }}
      rowKey={'id'}
      dataSource={props.data}
      columns={[
        {
          title: 'Team',
          dataIndex: 'team',
          render: (val) => <TeamField {...val} />,
        },
        {
          title: 'Game',
          dataIndex: 'game',
          render: (val) => val?.name,
        },
        {
          title: 'Status',
          dataIndex: 'status',
        },
        {
          title: 'Score',
          dataIndex: 'score',
        },
      ]}
    />
  );
};
