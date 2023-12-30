import React, { useContext, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useGame } from '../../../data/graphql/games/useGame';
import { GameContext } from '../../../context/GameContext';

const GameDropDownComponent = () => {
  const {
    gameList,
    getGame: { refetch, data },
  } = useGame();
  const game = data?.admin_game;
  const games = gameList?.data?.admin_game_list || [];
  const context = useContext(GameContext);

  const items = games.map((it) => {
    return {
      disabled: it.id === context.gameId,
      key: it.id,
      label: it.name,
      onClick: () => {
        context.changeGame(it.id);
      },
    };
  });
  return (
    <Dropdown menu={{ items }}>
      <a href={'/'} onClick={(e) => e.preventDefault()}>
        <Space>
          {game?.name}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default GameDropDownComponent;
