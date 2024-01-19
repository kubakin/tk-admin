import React, { useContext, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useGame } from '../../../data/graphql/games/useGame';
import { GameContext } from '../../../context/GameContext';
import { usePending } from '../../../data/graphql/game-instance/usePending';
import { useProgress } from '../../../data/graphql/game-instance/useProgress';

const TaskInstanceDropdown = (props: { id: string }) => {
  const { onTaskVoid } = useProgress();

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: 'void',
            label: 'Void',
            onClick: () => onTaskVoid(props.id),
          },
        ],
      }}
    >
      <a href={'/'} onClick={(e) => e.preventDefault()}>
        <Space>
          Actions
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default TaskInstanceDropdown;
