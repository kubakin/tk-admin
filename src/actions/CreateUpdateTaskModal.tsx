import { Modal } from 'antd';
import { CreateUpdateDefaultTaskForm } from './Task/CreateUpdateDefaultTask';
import { CreateUpdateQRTaskForm } from './Task/CreateUpdateQRTask';
import { CreateUpdateGeoTaskForm } from './Task/CreateUpdateGeoTask';
import { useTask } from '../data/graphql/task/useTask';
import { useGame } from '../data/graphql/games/useGame';

export interface CreateUpdateTaskModalInterface {
  data?: any;
  open: boolean;
  onClose: () => void;
}

export const CreateUpdateTaskModal = (
  props: CreateUpdateTaskModalInterface,
) => {
  const {
    createTask: [createTask],
    updateTask: [updateTask],
    taskList: { refetch },
  } = useTask();
  const {
    getGame: { data },
  } = useGame();
  const gameId = data?.admin_game?.id;
  const onOk = (val: any) => {
    if (props?.data?.id) {
      updateTask({
        variables: {
          dto: { ...val, gameId },
          id: props.data.id,
        },
      });
    } else {
      createTask({ variables: { dto: { ...val, gameId } } });
    }
    refetch();
    props.onClose();
  };
  const forms = {
    default: (
      <CreateUpdateDefaultTaskForm
        onOk={(val) => onOk(val)}
        data={props.data}
      />
    ),
    qr: <CreateUpdateQRTaskForm onOk={(val) => onOk(val)} data={props.data} />,
    geo: (
      <CreateUpdateGeoTaskForm onOk={(val) => onOk(val)} data={props.data} />
    ),
  };

  return (
    <Modal
      width={'70%'}
      onCancel={props.onClose}
      open={props.data}
      footer={null}
    >
      {forms[props.data.type]}
    </Modal>
  );
};
