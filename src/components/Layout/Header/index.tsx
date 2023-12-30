import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import { Header as HeaderComponent } from 'antd/es/layout/layout';
import { CreateUpdateGameModal } from '../../../actions/CreateUpdateGame.modal';

const { Header } = Layout;

const AdminHeader: React.FC = () => {
  return <Header style={{ padding: 0 }} />;
};

export default AdminHeader;
