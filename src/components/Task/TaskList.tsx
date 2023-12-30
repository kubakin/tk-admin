import { FC, useState } from 'react';
import { Button, Table } from 'antd';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { CreateUpdateTaskModal } from '../../actions/CreateUpdateTaskModal';

export interface TaskListItemInterface {
  id: string;
  name: string;
  penalty: number;
  cost: number;
  type: string;
}

export interface TeamListInterface {
  data: TaskListItemInterface[];
  loading: boolean;
}

const TaskCreateDropdown = (props: { onChange: (val: string) => void }) => {
  const onChange = (val: string) => {
    props.onChange(val);
  };
  const items: MenuProps['items'] = [
    {
      label: 'Обычное задание',
      key: 'default',
      onClick: () => onChange('default'),
    },
    {
      label: 'QR задание',
      key: 'qr',
      onClick: () => onChange('qr'),
    },
    {
      label: 'GEO задание',
      key: 'geo',
      onClick: () => onChange('geo'),
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Space>
          Создать таск
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default TaskCreateDropdown;

export const TaskList: FC<TeamListInterface> = (props) => {
  const [modalType, setModalType] = useState<string>(null);
  return (
    <>
      <Table
        title={() => {
          return <TaskCreateDropdown onChange={(val) => setModalType(val)} />;
        }}
        rowKey={'id'}
        loading={props.loading}
        dataSource={props.data}
        columns={[
          {
            title: 'name',
            dataIndex: 'name',
          },
          {
            title: 'Cost',
            dataIndex: 'cost',
          },
          {
            title: 'Penalty',
            dataIndex: 'penalty',
          },
          {
            title: 'Type',
            dataIndex: 'type',
          },
        ]}
      />
      <CreateUpdateTaskModal
        onClose={() => setModalType(null)}
        type={modalType}
        data={{}}
      />
    </>
  );
};
