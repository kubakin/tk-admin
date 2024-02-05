import React from 'react';
import {
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
} from 'antd';
import { WordInput } from '../common/ui/WordInput';
import { useGame } from '../data/graphql/games/useGame';
import moment from 'moment';
import daysjs from 'dayjs';
export interface CreateUpdateGameModalInteface {
  visible: boolean;
  onClose: () => void;
  data?: any;
}
export const CreateUpdateGameModal = (props: CreateUpdateGameModalInteface) => {
  const [form] = Form.useForm();
  const {
    createGame: [createGame],
    updateGame: [updateGame],
  } = useGame();

  const onOk = () => {
    form.submit();
  };

  const submit = async (val: any) => {
    if (props?.data?.id) {
      updateGame({ variables: { id: props?.data?.id, dto: val } });
    } else {
      createGame({ variables: { dto: val } });
    }
    props.onClose();
  };
  form.setFieldsValue({
    ...props.data,
    plannedAt: daysjs(new Date(props?.data?.plannedAt || new Date())),
  });

  return (
    <Modal
      width={'70%'}
      open={props.visible}
      onCancel={props.onClose}
      onOk={onOk}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: '80%' }}
        onFinish={submit}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Название"
          name="name"
          rules={[
            { required: true, message: 'Введите номер название команды' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item valuePropName="checked" label="Спрятана" name="hidden">
          <Checkbox />
        </Form.Item>
        <Form.Item label="Стоимость" name="cost">
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Описание"
          name="description"
          rules={[
            { required: true, message: 'Введите номер название команды' },
          ]}
        >
          <WordInput
            onChange={(val) => form.setFieldValue('description', val)}
          />
        </Form.Item>

        <Form.Item
          label="Правила"
          name="rules"
          rules={[
            { required: true, message: 'Введите номер название команды' },
          ]}
        >
          <WordInput onChange={(val) => form.setFieldValue('rules', val)} />
        </Form.Item>
        <Form.Item label="Кол-во человек" name="personLimit">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Длительность мин" name="duration">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Выдача заданий" name="taskStrategy">
          <Select>
            <Select.Option value="DEFAULT">По порядку</Select.Option>
            <Select.Option value="RANDOM">Случайно</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          valuePropName="checked"
          label="Начинать автомат"
          name="autoStart"
        >
          <Checkbox />
        </Form.Item>
        <Form.Item
          valuePropName="checked"
          label="Заканчивать автомат"
          name="autoEnd"
        >
          <Checkbox />
        </Form.Item>
        <Form.Item label="Запланирована" name="plannedAt">
          <DatePicker showTime={true} />
        </Form.Item>
        <Form.Item label="Финальный текст" name="finalText">
          <WordInput />
        </Form.Item>
      </Form>
    </Modal>
  );
};
