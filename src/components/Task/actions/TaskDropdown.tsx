import React, { useContext, useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useGame } from '../../../data/graphql/games/useGame';
import { GameContext } from '../../../context/GameContext';
import { usePending } from '../../../data/graphql/game-instance/usePending';
import { useFinish } from '../../../data/graphql/game-instance/useFinish';
import { CreateUpdateTaskModal } from '../../../actions/CreateUpdateTaskModal';

const TaskDropDown = (props: { data: any }) => {
  const { onRelease } = useFinish();

  const [updateModal, setUpdateModal] = useState(false);

  return (
    <>
      <Dropdown
        menu={{
          items: [
            {
              key: 'update',
              label: 'Update',
              onClick: () => setUpdateModal(true),
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
      {updateModal && (
        <CreateUpdateTaskModal
          open={updateModal}
          onClose={() => setUpdateModal(false)}
          data={props.data}
        />
      )}
    </>
  );
};

export default TaskDropDown;
