import React, {useEffect} from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import {login} from "../../data/query/admin/admin.queries";
import {useNavigate} from "react-router";
import Modal from 'antd/es/modal/Modal';



const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    phone?: string;
    password?: string;
    remember?: string;
};

const Auth = (props: {onOk: (token: string)=> void}) => {
    const [form] = Form.useForm()
    const onFinish = (values: any) => {
        console.log('Success:', values);
        login(values)
            .then((rs) => {
                props.onOk(rs.accessToken);
            })
            .catch((rs) => {
                console.log(rs)
            })
    };
    const token = localStorage.getItem('ADMIN_TOKEN')
    return (
        <Modal onOk={()=> {
            form
            .validateFields()
            .then(val=> {
                onFinish(val);
                form.resetFields()

            })
        }} open={true}>
        <Form
            form={form}
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Phone"
                name="phone"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>
        </Form>
        </Modal>
    );
}

export default Auth;