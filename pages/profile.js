'use client' 
import {useState} from 'react'
import {Button,Layout} from 'antd'
export default function index() {
// const [getAli,setAli]=useState(10)
const { Header, Content, Footer, Sider } = Layout;


  
    return (
      <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className="demo-logo-vertical" />
          {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} /> */}
        </Sider>
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
          }}
        >
          <Header
            style={{
              padding: 0,
              background: "red",
            }}
          />
          <Content
            style={{
              margin: '24px 16px 0',
              overflow: 'initial',
            }}
          >
            <div
              style={{
                padding: 24,
                textAlign: 'center',
                background: "red",
              }}
            >
              <p>long content</p>
         
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  



}