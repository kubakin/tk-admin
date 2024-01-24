import { Table } from 'antd';
import { AttemptItemInterface, AttemptsTable } from './AttemptsTable';
import { FC } from 'react';
import {
  LoadingOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import TaskInstanceDropdown from '../Actions/TaskInstanceDropdown';

export interface TaskInstanceItemInterface {
  id: string;
  status: string;
  task: {
    id: string;
    name: string;
  };
  order: number;
  attempts: AttemptItemInterface[];
}

interface TaskInstanceTableInterface {
  data: TaskInstanceItemInterface[];
}

export const TaskInstanceTable: FC<TaskInstanceTableInterface> = (props) => {
  const status = {
    Process: <LoadingOutlined />,
    Created: <ClockCircleOutlined />,
    Success: <CheckCircleOutlined />,
  };
  return (
    <Table
      expandedRowRender={(r) => AttemptsTable({ data: r.attempts })}
      rowKey={'id'}
      dataSource={props.data}
      columns={[
        {
          title: 'Task',
          dataIndex: 'task',
          render: (it) => it.name,
        },
        {
          title: 'Status',
          dataIndex: 'status',
          render: (it) => status[it] || it,
        },
        {
          title: 'Actions',
          render: (it) => <TaskInstanceDropdown id={it} />,
          dataIndex: 'id',
        },
      ]}
    />
  );
};
