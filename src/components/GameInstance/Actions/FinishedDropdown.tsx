import React, { useContext, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useGame } from '../../../data/graphql/games/useGame';
import { GameContext } from '../../../context/GameContext';
import { usePending } from '../../../data/graphql/game-instance/usePending';
import { useFinish } from '../../../data/graphql/game-instance/useFinish';

const FinishedDropdown = (props: { id: string }) => {
  const { onRelease } = useFinish();

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: 'release',
            label: 'Release',
            onClick: () => onRelease(props.id),
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

export default FinishedDropdown;
