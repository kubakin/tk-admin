import React from 'react';
import { Menu } from 'antd';
import GameDropDownComponent from '../GameDropDown';
import Sider from 'antd/es/layout/Sider';
import { useLocation, useNavigate } from 'react-router';

const MenuComponent: React.FC = () => {
  // const [collapsed, setCollapsed] = useState(false);

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
    </Sider>
  );
};

export default MenuComponent;
