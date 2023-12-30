import React, {memo, ReactNode} from "react";
import {Layout} from 'antd';
import MenuComponent from "./Menu";
import AdminHeader from "./Header";

const {Header, Content} = Layout;

export interface AdminLayoutInterface {
    children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutInterface> = (props) => {
  
    return (
        <Layout style={{minHeight:"100vh"}}>
            <MenuComponent/>
            <Layout>
                <AdminHeader/>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        // background: colorBgContainer,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default memo(AdminLayout);