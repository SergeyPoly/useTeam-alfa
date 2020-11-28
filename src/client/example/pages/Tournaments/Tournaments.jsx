import React, { useState } from 'react';
import { Layout, Menu } from 'antd';

import {
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const Tournaments =()=>{

  const [collapsed, setCollapsed]=useState(false)
  
  const toggle = () => {
    setCollapsed( !collapsed);
  };

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          {/* <div className="logo" /> */}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
            Naga Bank
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Mars Arena
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
            Naga Bank
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
            Back to school
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <MenuUnfoldOutlined className ='trigger' onClick={toggle} /> 

            {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })} */}
          </Header>
          <Content className="site-layout-background" style={{minHeight:280}}>'Content'</Content>
        </Layout>
      </Layout>
    );
  
}

export default Tournaments


// const Tournaments = () => {
//     setTwoToneColor('#2C2B5F')
    
//     return(
//         <div>
//            <ThunderboltTwoTone twoToneColor="red"/>
//             <HomeTwoTone />
//         </div> 
//         )
// };

// export default Tournaments;