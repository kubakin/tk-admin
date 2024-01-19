import { Button, Form, Input, InputNumber } from 'antd';
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
  form.setFieldsValue(props.data);
  return (
    <Form form={form} onFinish={props.onOk}>
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
      <Form.Item label="Приз" name="cost">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Штраф" name="penalty">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Ответ" name="answer">
        <MapInput />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
