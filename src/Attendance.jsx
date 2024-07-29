import React from 'react';
import { Layout, Button, Typography, Menu, Table, Space } from 'antd';
import {
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

const attendanceColumns = [
  { title: 'Employee ID', dataIndex: 'employeeId', key: 'employeeId', width: 150 },
  { title: 'Name', dataIndex: 'name', key: 'name', width: 150 },
  { title: 'Email', dataIndex: 'email', key: 'email', width: 200 },
  { title: 'Phone Number', dataIndex: 'phoneNumber', key: 'phoneNumber', width: 150 },
  { title: 'Check In Time', dataIndex: 'checkInTime', key: 'checkInTime', width: 150 },
  { title: 'Check Out Time', dataIndex: 'checkOutTime', key: 'checkOutTime', width: 150 },
  { title: 'Status', dataIndex: 'status', key: 'status', width: 100 },
  { 
    title: 'Action', 
    key: 'action',
    render: () => <Button size="small">Details</Button>,
    width: 100
  },
];

const attendanceData = [
  { key: '1', employeeId: 'E001', name: 'test', email: 'test@email.com', phoneNumber: '0123456764', checkInTime: '9:00pm', checkOutTime: '5:00pm', status: 'Present' },
  { key: '2', employeeId: 'E002', name: 'test', email: '', phoneNumber: '0123546424', checkInTime: '-', checkOutTime: '-', status: 'On Leave' },
  { key: '3', employeeId: 'E003', name: 'test', email: '', phoneNumber: '0123546424', checkInTime: '-', checkOutTime: '-', status: 'On Leave' },
];

const Attendance = () => {
  return(
  <Layout style={{ minHeight: '100vh' }}>
    <Sider theme="light" width={200}>
      <Menu mode="inline" defaultSelectedKeys={['1']} items={menuItems} />
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: '0 16px', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <Title level={4} style={{ margin: 0 }}>Leave and Attendance</Title>
        </div>
      </Header>
      <Content style={{ margin: '6px', padding: 24, background: '#fff' }}>
        <Table 
          columns={attendanceColumns} 
          dataSource={attendanceData} 
          pagination={false}
          size="small"
          style={{ marginBottom: '16px' }}
          scroll={{ x: true }}
        />
        <div style={{ textAlign: 'right' }}>
          <Button size="small">Edit</Button>
        </div>
      </Content>
    </Layout>
  </Layout>
  );
};  

export default Attendance;
