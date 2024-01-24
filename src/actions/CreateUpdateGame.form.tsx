import React from 'react';
import {Button, Form, Input, Modal} from 'antd';
import { WordInput } from '../common/ui/WordInput';
import { useGame } from '../data/graphql/games/useGame';
export interface CreateUpdateGameFormInteface {
    data?: any;
    id?: string;
}
export const CreateUpdateGameForm = (props: CreateUpdateGameFormInteface) => {
        const [form] = Form.useForm();
        const {createGame: [createGame], updateGame: [updateGame], getGame, gameList} = useGame()
        form.setFieldsValue(props.data)
    
        const submit = async (val: any) => {
            if (props.id) {
                updateGame({variables: {id: props.id, dto: val}})
            }
            else{
                createGame({variables: {dto: val}})
            }
            getGame.refetch()
            gameList.refetch()
        }
    
    
        return (
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
                        rules={[{required: true, message: 'Введите название игры'}]}
                    >
                        <Input/>
                    </Form.Item>
                   
                    <Form.Item
                        label="Описание"
                        name="description"
                        rules={[{required: true, message: 'Введите описание игры'}]}
                    >
                    <WordInput/>
                    </Form.Item>
                    <Form.Item
                        label="Правила"
                        name="rules"
                        rules={[{required: true, message: 'Введите правила игры'}]}
                    >
                    <WordInput/>
                    </Form.Item>

                    {/* <Form.Item
                        label="Правила"
                        name="rules"
                        rules={[{required: true, message: 'Введите номер название команды'}]}
                    >
                    <WordInput onChange={(val)=> form.setFieldValue('rules', val)}/>
                    </Form.Item> */}

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
                </Form>
        );
    
}