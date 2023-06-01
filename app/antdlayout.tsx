'use client';
import { Layout, Space } from 'antd';
import { AntdMenu } from './menu';
const { Header, Footer, Sider, Content } = Layout;

export const AntdLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {

    const headerStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        paddingInline: 50,
        lineHeight: '64px',
        backgroundColor: '#7dbcea',
      };
    
      const contentStyle: React.CSSProperties = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#108ee9',
      };
    
      const siderStyle: React.CSSProperties = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#3ba0e9',
      };
    
      const footerStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#7dbcea',
      };
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
          <Header style={headerStyle}><AntdMenu/></Header>
          <Layout hasSider>
            <Sider style={siderStyle}>Sider</Sider>
            <Content style={contentStyle}>{children}</Content>
          </Layout>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Space>
      
    )
}