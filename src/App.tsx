import React, {useState} from 'react';
import 'antd/dist/antd.less';
import {Button, Layout, Menu, Typography} from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

function App() {
    const [state, setState] = useState({
        collapsed: false,
    });

    const toggle = () => {
        setState((prev) => ({
            collapsed: !prev.collapsed,
        }));
    };
  return (
      <Layout >
          <Sider trigger={null} collapsible collapsed={state.collapsed} className={'some-sider'}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                      nav 1
                  </Menu.Item>
                  <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                      nav 2
                  </Menu.Item>
                  <Menu.Item key="3" icon={<UploadOutlined />}>
                      nav 3
                  </Menu.Item>
              </Menu>
          </Sider>
          <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                  {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                      className: 'trigger',
                      onClick: toggle,
                  })}
              </Header>
              <Content
                  className="site-layout-background"
                  style={{
                      margin: '24px 16px',
                      padding: 24,
                      minHeight: 280,
                  }}
              >
                  <Typography.Paragraph className='bg-amber-400'>asdasdasd</Typography.Paragraph>
                  <Button className='bg-amber-400'>Contents</Button>
              </Content>
          </Layout>
      </Layout>
  );
}

export default App;
