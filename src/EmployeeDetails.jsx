import React from 'react';
import { Layout, Card, Row, Col, Button, Typography, Menu } from 'antd';
import { LeftOutlined, PictureOutlined, ScheduleOutlined, MoneyCollectOutlined, FormOutlined, EditOutlined, LineChartOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import "./style.css";

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Attendance', '1', <ScheduleOutlined />),
  getItem('Payroll', '2', <MoneyCollectOutlined />),
  getItem('Employee Survey', '3', <FormOutlined />),
  getItem('Letter Generator', '4', <EditOutlined />),
  getItem('Performance Tracker', '5', <LineChartOutlined />),
  getItem('Add Employee', '6', <UserAddOutlined />),
]

const EmployeeDetails = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light">
        <Menu mode="inline" items={items}/>
      </Sider>
      <Layout>
        <Header className="bg-white">
          EmployeeDetails
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <Card className="bg-gray-600">
            test
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default EmployeeDetails;
