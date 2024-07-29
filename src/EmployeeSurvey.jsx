import React from 'react';
import { Layout, Card, Row, Col, Button, Typography, Menu, Space } from 'antd';
import { LeftOutlined, ScheduleOutlined, MoneyCollectOutlined, FormOutlined, EditOutlined, LineChartOutlined, UserAddOutlined, PieChartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const { Header, Sider, Content, Footer } = Layout;
const { Title, Text } = Typography;

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

const EmployeeSurvey = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider theme="light">
        <Menu mode="inline" defaultSelectedKeys={['3']} items={items} />
      </Sider>
      <Layout className="flex flex-col">
        <Header className="bg-white">
          <Typography.Title level={2}> 
            Employee Survey
          </Typography.Title>
        </Header>
        <Content className="p-4">
          <Card style={{ width: '100%' }}>
            <Row gutter={[16, 16]}>
              <Col span={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>80% have filled survey</Text>
              </Col>
              <Col span={12}>
                <Typography.Title level={4}>Highlights</Typography.Title>
                <Row justify="center">
                  <PieChartOutlined style={{ fontSize: '80px' }} />
                </Row>
                <Row justify="center">
                  <Text>88% have issues of this matter</Text>
                </Row>
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: 32 }}>
              <Col span={12}>
                <Typography.Title level={4}>Summary</Typography.Title>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Text>50% are happy</Text>
                  <Text>50% are sad</Text>
                  <Text>0% are neutral</Text>
                </Space>
              </Col>
            </Row>
            <Row style={{ marginTop: 'auto' }}>
              <Col span={24} style={{ textAlign: 'right' }}>
                <Button type="link">More info</Button>
              </Col>
            </Row>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default EmployeeSurvey;