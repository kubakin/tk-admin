import { Button, Form, Input } from 'antd';
import { WordInput } from '../../common/ui/WordInput';
import MapInput from '../../common/ui/MapInput';

export interface CreateUpdateGeoTaskInterface {
  data: any;
  onOk: (val: any) => void;
}

export const CreateUpdateGeoTaskForm = (
  props: CreateUpdateGeoTaskInterface,
) => {
  const [form] = Form.useForm();
  return (
    <Form onFinish={props.onOk}>
      <Form.Item
        label="Название"
        name="name"
        rules={[{ required: true, message: 'Введите название' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Тело" name="body">
        <MapInput  />
      </Form.Item>
      <Form.Item label="Описание" name="description">
        <WordInput />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
