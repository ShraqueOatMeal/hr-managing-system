import React from 'react';
import { Layout, Card, Row, Col, Button, Typography, Menu, Space, Input } from 'antd';
import { LeftOutlined, ScheduleOutlined, MoneyCollectOutlined, FormOutlined, EditOutlined, LineChartOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import "./style.css";

const { Header, Sider, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { TextArea } = Input;

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

const OfferLetter = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider theme="light">
        <Menu mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout className="flex flex-col">
        <Header className="bg-white">
          <Typography.Title level={2}> 
            Offer Letter
          </Typography.Title>
        </Header>
        <Content className="p-4">
          <Card style={{ width: '100%' }}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Input placeholder="Company Name" />
                  <Input placeholder="Date and Email" />
                  <Input placeholder="Title" />
                  <Input placeholder="Dear employee name:" />
                  <TextArea placeholder="Passage here" rows={6} />
                  <Input placeholder="Sincerely" />
                  <Input placeholder="Name" />
                  <Input placeholder="Signature" />
                </Space>
              </Col>
            </Row>
            <Row justify="end" style={{ marginTop: 16 }}>
              <Button type="primary">Generate (export to pdf)</Button>
            </Row>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default OfferLetter;
