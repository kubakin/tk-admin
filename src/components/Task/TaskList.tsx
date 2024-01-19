import { FC, useState } from 'react';
import { Button, Table } from 'antd';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { CreateUpdateTaskModal } from '../../actions/CreateUpdateTaskModal';
import TaskDropDown from './actions/TaskDropdown';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useTask } from '../../data/graphql/task/useTask';
export interface TaskListItemInterface {
  id: string;
  name: string;
  penalty: number;
  cost: number;
  type: string;
  defaultOrder: number;
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
  const data = props.data;
  const {
    updateTask: [updateTask],
  } = useTask();
  // setData((prev)=> {
  //   return prev
  // })
  const upOrder = (idx: number) => {
    if (data?.[idx] && data?.[idx - 1]) {
      const i = data[idx];
      const j = data[idx - 1];
      updateTask({
        variables: { id: i.id, dto: { defaultOrder: j.defaultOrder } },
      });
      updateTask({
        variables: { id: j.id, dto: { defaultOrder: i.defaultOrder } },
      });
    }
  };

  const downOrder = (idx: number) => {
    if (data?.[idx] && data?.[idx + 1]) {
      const i = data[idx];
      const j = data[idx + 1];
      updateTask({
        variables: { id: i.id, dto: { defaultOrder: j.defaultOrder } },
      });
      updateTask({
        variables: { id: j.id, dto: { defaultOrder: i.defaultOrder } },
      });
    }
  };
  const [modalType, setModalType] = useState<string>(null);
  return (
    <>
      <Table
        title={() => {
          return <TaskCreateDropdown onChange={(val) => setModalType(val)} />;
        }}
        rowKey={'id'}
        loading={props.loading}
        dataSource={data}
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
          {
            title: 'Actions',
            dataIndex: 'id',
            render: (it, row) => <TaskDropDown data={row} />,
          },
          {
            title: 'Order',
            dataIndex: 'defaultOrder',
            render: (it, row, idx) => {
              return (
                <>
                  <Button
                    onClick={() => downOrder(idx)}
                    icon={<ArrowDownOutlined />}
                  />
                  <Button
                    onClick={() => upOrder(idx)}
                    icon={<ArrowUpOutlined />}
                  />
                </>
              );
            },
          },
        ]}
      />
      {modalType && (
        <CreateUpdateTaskModal
          open={!!modalType}
          onClose={() => setModalType(null)}
          data={{ type: modalType }}
        />
      )}
    </>
  );
};
