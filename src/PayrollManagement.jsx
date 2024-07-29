import React from 'react';
import { useState } from 'react';
import { Layout, Typography, Button, Menu, Table } from 'antd';
import {
  LeftOutlined,
  ScheduleOutlined,
  MoneyCollectOutlined,
  FormOutlined,
  EditOutlined,
  LineChartOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const menuItems = [
  { key: '1', icon: <ScheduleOutlined />, label: 'Attendance' },
  { key: '2', icon: <MoneyCollectOutlined />, label: 'Payroll' },
  { key: '3', icon: <FormOutlined />, label: 'Employee Survey' },
  { key: '4', icon: <EditOutlined />, label: 'Letter Generator' },
  { key: '5', icon: <LineChartOutlined />, label: 'Performance Tracker' },
  { key: '6', icon: <UserAddOutlined />, label: 'Add Employee' },
];

const payrollColumns = [
  { title: 'Employee ID', dataIndex: 'employeeId', key: 'employeeId', width: 150 },
  { title: 'Name', dataIndex: 'name', key: 'name', width: 150 },
  { title: 'Email', dataIndex: 'email', key: 'email', width: 200 },
  { title: 'Phone Number', dataIndex: 'phoneNumber', key: 'phoneNumber', width: 150 },
  { title: 'Job Title', dataIndex: 'jobTitle', key: 'jobTitle', width: 150 },
  { title: 'Salary', dataIndex: 'salary', key: 'salary', width: 100 },
  { title: 'Status', dataIndex: 'status', key: 'status', width: 100 },
  {
    title: 'Action',
    key: 'action',
    render: () => <Button size="small">Details</Button>,
    width: 100,
  },
];

const payrollData = [
  {
    key: '1',
    employeeId: 'E001',
    name: 'test',
    email: 'test@email.com',
    phoneNumber: '0123456764',
    jobTitle: 'Senior Dev',
    salary: 'RM10000',
    status: 'Paid',
  },
  {
    key: '2',
    employeeId: 'E002',
    name: 'test',
    email: '',
    phoneNumber: '0123546424',
    jobTitle: '-',
    salary: '-',
    status: 'Unpaid',
  },
];

const PayrollManagement = () => {

  const [editable, setEditable] = useState(false);

  return(
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" width={200}>
        <Menu mode="inline" defaultSelectedKeys={['2']} items={menuItems} />
      </Sider>
      <Layout>
        <Header
          style={{
            background: '#fff',
            padding: '0 16px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Button icon={<LeftOutlined />} type="text" style={{ marginRight: 8 }} />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <Title level={4} style={{ margin: 0 }}>
              Payroll Management
            </Title>
          </div>
        </Header>
        <Content style={{ margin: '6px', padding: 24, background: '#fff' }}>
          <Table
            columns={payrollColumns}
            dataSource={payrollData}
            pagination={false}
            size="small"
            style={{ marginBottom: '16px' }}
            scroll={{ x: true }}
          />
          <div style={{ textAlign: 'right' }}>
            {!editable ?
              (
                <Button size="small" onClick={() => setEditable(true)}>
                  Edit
                </Button>
              ) :
              (
                <Button size="small" onClick={() => setEditable(false)}>
                  Save
                </Button>
              )
            }
          </div>
        </Content>
      </Layout>
    </Layout>
  )
};

export default PayrollManagement;
