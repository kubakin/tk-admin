import React, { useState } from 'react';
import { Menu } from 'antd';
import GameDropDownComponent from '../GameDropDown';
import Sider from 'antd/es/layout/Sider';
import { useLocation, useNavigate } from 'react-router';
import { CreateUpdateGameModal } from '../../../actions/CreateUpdateGame.modal';
import { useGame } from '../../../data/graphql/games/useGame';

const MenuComponent: React.FC = () => {
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const {
    getGame: { data },
  } = useGame();
  const game = data?.admin_game;
  // const toggleCollapsed = () => {
  //     setCollapsed(!collapsed);
  // };

  const location = useLocation();
  const navigate = useNavigate();

  const urls = [];

  return (
    <Sider trigger={null} collapsible collapsed={false}>
      {/* <GameDropDownComponent /> */}
      <Menu
        theme="dark"
        defaultValue={location.pathname}
        mode="inline"
        onClick={(e) => navigate(e.key)}
        defaultSelectedKeys={[location.pathname]}
        items={[
          {
            key: '/admin/user',
            label: 'Users',
          },
          {
            key: '/admin/team',
            label: 'Teams',
          },
          {
            key: '/admin/task',
            label: 'Tasks',
          },
          {
            key: '/admin/game-instance',
            label: 'Progress',
          },
          {
            key: '/admin/pending',
            label: 'Pending',
          },
          {
            key: '/admin/game',
            label: 'Game',
          },
        ]}
      />
      {game && (
        <Menu
          theme="dark"
          defaultValue={location.pathname}
          mode="inline"
          items={[
            {
              key: 'dropdows',
              label: <GameDropDownComponent />,
            },
          ]}
        />
      )}
      <Menu
        theme="dark"
        defaultValue={location.pathname}
        mode="inline"
        items={[
          {
            onClick: () => setEditModal(true),
            key: 'Редактировать игру',
            label: 'Редактировать игру',
          },
          {
            onClick: () => setCreateModal(true),
            key: 'Создать игру',
            label: 'Создать игру',
          },
        ]}
      />
      <CreateUpdateGameModal
        onClose={() => setCreateModal(false)}
        visible={createModal}
      />
      <CreateUpdateGameModal
        data={game}
        onClose={() => setEditModal(false)}
        visible={editModal}
      />
    </Sider>
  );
};

export default MenuComponent;
