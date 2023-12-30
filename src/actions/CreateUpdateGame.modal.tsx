import React from 'react';
import {Form, Input, Modal} from 'antd';
import { WordInput } from '../common/ui/WordInput';
export interface CreateUpdateGameModalInteface {
    visible: boolean;
    onClose: () => void
}
export const CreateUpdateGameModal = (props: CreateUpdateGameModalInteface) => {
        const [form] = Form.useForm();
        const onOk = () => {
            form.submit();
        };
    
        const submit = async (val: any) => {
            console.log(val)
            props.onClose();
        }
    
    
        return (
            <Modal open={props.visible} onCancel={props.onClose} onOk={onOk}>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: '80%'}}
                    initialValues={{remember: true}}
                    onFinish={submit}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Название"
                        name="name"
                        rules={[{required: true, message: 'Введите номер название команды'}]}
                    >
                        <Input/>
                    </Form.Item>
                   
                    <Form.Item
                        label="Описание"
                        name="description"
                        rules={[{required: true, message: 'Введите номер название команды'}]}
                    >
                    <WordInput onChange={(val)=> form.setFieldValue('description', val)}/>
                    </Form.Item>

                    <Form.Item
                        label="Правила"
                        name="rules"
                        rules={[{required: true, message: 'Введите номер название команды'}]}
                    >
                    <WordInput onChange={(val)=> form.setFieldValue('rules', val)}/>
                    </Form.Item>

                </Form>
            </Modal>
        );
    
}