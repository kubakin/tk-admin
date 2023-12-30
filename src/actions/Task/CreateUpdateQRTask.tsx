import { Button, Form, Input } from 'antd';
import { WordInput } from '../../common/ui/WordInput';

export interface CreateUpdateQRTaskInterface {
  data: any;
  onOk: (val: any) => void;
}

export const CreateUpdateQRTaskForm = (props: CreateUpdateQRTaskInterface) => {
  const [form] = Form.useForm();
  return (
    <Form onFinish={props.onOk}>
      <Form.Item label="Тип" name="type">
        <Input disabled={true} />
      </Form.Item>
      <Form.Item
        label="Название"
        name="name"
        rules={[{ required: true, message: 'Введите название' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Описание" name="description">
        <WordInput />
      </Form.Item>
      <Form.Item label="Значение QR" name={['body', 'value']}>
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
