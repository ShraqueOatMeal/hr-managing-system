import React, { useState } from 'react';
import { Layout, Table, Button, Typography, Menu, Modal, Form, Input } from 'antd';
import { ScheduleOutlined, MoneyCollectOutlined, FormOutlined, EditOutlined, LineChartOutlined, UserAddOutlined } from '@ant-design/icons';
import "./style.css";

const { Header, Sider, Content } = Layout;
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

const PerformanceTracker = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingKey, setEditingKey] = useState('');
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      employeeId: 'E001',
      name: 'test',
      email: 'test@email.com',
      phoneNumber: '0123456764',
      jobTitle: 'Senior Dev',
      tasksAssigned: 'Task a\nTask b',
      status: 'Completed Task a'
    },
    {
      key: '2',
      employeeId: 'E002',
      name: 'test',
      email: '',
      phoneNumber: '0123546424',
      jobTitle: '',
      tasksAssigned: '',
      status: ''
    },
  ]);

  const showModal = (key) => {
    setEditingKey(key);
    setIsModalVisible(true);
  };

  const handleOk = (values) => {
    const newDataSource = [...dataSource];
    const index = newDataSource.findIndex(item => item.employeeId === editingKey);
    if (index >= 0) {
      newDataSource[index] = { ...newDataSource[index], ...values };
    } else {
      newDataSource.push({ key: `${newDataSource.length + 1}`, ...values });
    }
    setDataSource(newDataSource);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Employee ID',
      dataIndex: 'employeeId',
      key: 'employeeId',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Job Title',
      dataIndex: 'jobTitle',
      key: 'jobTitle',
    },
    {
      title: 'Tasks Assigned',
      dataIndex: 'tasksAssigned',
      key: 'tasksAssigned',
      render: (text) => (
        <ul>
          {text.split('\n').map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Edit',
      key: 'edit',
      render: (_, record) => (
        <Button type="link" onClick={() => showModal(record.employeeId)}>Edit</Button>
      ),
    },
  ];

  return (
    <Layout>
      <Sider theme="light">
        <Menu mode="inline" defaultSelectedKeys={['5']} items={items} />
      </Sider>
      <Layout className="flex flex-col">
        <Header className="bg-white">
          <Typography.Title level={2}>
            Performance Tracker
          </Typography.Title>
        </Header>
        <Content className="p-4">
          <Table dataSource={dataSource} columns={columns} pagination={false} />
          <div style={{ textAlign: 'right', marginTop: 16 }}>
            <Button type="primary" onClick={() => showModal(null)}>Add</Button>
          </div>
        </Content>
      </Layout>
      <Modal title="Edit Employee" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form
          layout="vertical"
          onFinish={handleOk}
          initialValues={dataSource.find(item => item.employeeId === editingKey) || {}}
        >
          <Form.Item name="employeeId" label="Employee ID" rules={[{ required: true, message: 'Please input Employee ID!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item name="phoneNumber" label="Phone Number">
            <Input />
          </Form.Item>
          <Form.Item name="jobTitle" label="Job Title">
            <Input />
          </Form.Item>
          <Form.Item name="tasksAssigned" label="Tasks Assigned">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="status" label="Status">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default PerformanceTracker;
