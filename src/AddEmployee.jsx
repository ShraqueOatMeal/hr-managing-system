import React from 'react';
import { useState } from 'react';
import { Layout, Card, Row, Col, Button, Typography, Menu, Flex, Space, Image, Input } from 'antd';
import { LeftOutlined, PictureOutlined, ScheduleOutlined, MoneyCollectOutlined, FormOutlined, EditOutlined, LineChartOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
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

const AddEmployee = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider theme="light">
        <Menu mode="inline" defaultSelectedKeys={['6']} items={items}/>
      </Sider>
      <Layout className="flex flex-col">
        <Header className="bg-white">
          <Typography.Title level={2}> 
            Add Employee
          </Typography.Title>
        </Header>
        <Content className="p-4">
          <Card style={{ width: 965 }} >
            <Image
              width={200}
              height={200}
              src="error"
            />
            <Flex>
              <Col span={12}>
                <Space direction="vertical" style={{ marginTop: 16 }}>
                  <Text strong>Employee ID: <Input /></Text>
                  <Text strong>Name:<Input /></Text>
                  <Text strong>Email Address:<Input /></Text>
                  <Text strong>Phone Number:<Input /></Text>
                  <Text strong>Salary Status:<Input /></Text>
                  <Text strong>Task Assigned:<Input /></Text>
                  <Text strong>Task Completed:<Input /></Text>
                </Space>
              </Col>
              <Col span={12}>
                <Space direction="vertical">
                  <Text strong>Check In Time:<Input /></Text>
                  <Text strong>Check Out Time:<Input /></Text>
                  <Text strong>Status:<Input /></Text>
                  <Text strong>Reason:<Input /></Text>
                </Space>
              </Col>
            </Flex>
            <Flex justify="flex-end" style={{ marginTop: 16 }}>
              <Space>
                <Button type="primary" >Add Employee</Button>
              </Space>
            </Flex>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AddEmployee;

