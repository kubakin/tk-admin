import React, { useContext, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useGame } from '../../../data/graphql/games/useGame';
import { GameContext } from '../../../context/GameContext';
import { usePending } from '../../../data/graphql/game-instance/usePending';

const PendingDropdown = (props: { id: string }) => {
  const { onApprove, onReject } = usePending();

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: 'approve',
            label: 'Approve',
            onClick: () => onApprove(props.id),
          },
          {
            key: 'reject',
            label: 'Reject',
            onClick: () => onReject(props.id),
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

export default PendingDropdown;
