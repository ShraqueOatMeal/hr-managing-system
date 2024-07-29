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

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const [editable, setEditable] = useState(false)

  return (
    <Layout>
      <Sider theme="light">
        <Menu mode="inline" defaultSelectedKeys={['1']} items={items}/>
      </Sider>
      <Layout className="flex flex-col">
        <Header className="bg-white">
          <Typography.Title level={2}> 
            EmployeeDetails
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
                  <Text strong>Employee ID: <Input disabled={editable ? false : true} /></Text>
                  <Text strong>Name:<Input disabled={editable ? false : true} /></Text>
                  <Text strong>Email Address:<Input disabled={editable ? false : true} /></Text>
                  <Text strong>Phone Number:<Input disabled={editable ? false : true} /></Text>
                  <Text strong>Salary Status:<Input disabled={editable ? false : true} /></Text>
                  <Text strong>Task Assigned:<Input disabled={editable ? false : true} /></Text>
                  <Text strong>Task Completed:<Input disabled={editable ? false : true} /></Text>
                </Space>
              </Col>
              <Col span={12}>
                <Space direction="vertical">
                  <Text strong>Check In Time:<Input disabled={editable ? false : true} /></Text>
                  <Text strong>Check Out Time:<Input disabled={editable ? false : true} /></Text>
                  <Text strong>Status:<Input disabled={editable ? false : true} /></Text>
                  <Text strong>Reason:<Input disabled={editable ? false : true} /></Text>
                </Space>
              </Col>
            </Flex>
            <Flex justify="flex-end" style={{ marginTop: 16 }}>
              <Space>
                {!editable ? (
                  <>
                    <Button type="primary" onClick={() => setEditable(true)} >Edit Employee Details</Button>
                    <Button danger>Delete Employee</Button>
                  </>
                ) : 
                (
                  <Button type="primary" onClick={() => setEditable(false)} >Save Details</Button>
                )}
              </Space>
            </Flex>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default EmployeeDetails;
