import { Modal } from 'antd';
import { CreateUpdateDefaultTaskForm } from './Task/CreateUpdateDefaultTask';
import { CreateUpdateQRTaskForm } from './Task/CreateUpdateQRTask';
import { CreateUpdateGeoTaskForm } from './Task/CreateUpdateGeoTask';
import { useTask } from '../data/graphql/task/useTask';
import { useGame } from '../data/graphql/games/useGame';

export interface CreateUpdateTaskModalInterface {
  type: string;
  data?: any;
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
  props.data.type = props.type;
  const {
    getGame: { data },
  } = useGame();
  const gameId = data?.admin_game?.id;
  const onOk = (val: any) => {
    console.log(val);
    if (props?.data?.id) {
      updateTask({
        variables: {
          dto: { ...val, type: props.type, gameId },
          id: props.data.id,
        },
      });
    } else {
      createTask({ variables: { dto: { ...val, type: props.type, gameId } } });
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
    <Modal onCancel={props.onClose} open={!!props.type} footer={null}>
      {forms[props.type]}
    </Modal>
  );
};
