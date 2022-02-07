import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Breadcrumb} from 'antd';
import {HomeMenu} from "./components/MainPage/Menu";
import {HeaderNav} from "./components/Navigation/HeaderNav";

const {Header, Content, Footer} = Layout;

function App() {
  return (
    <Layout>
      <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
        <div className="logo"/>
        <HeaderNav/>
      </Header>
      <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
        <Breadcrumb style={{margin: '16px 0'}}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
          <HomeMenu/>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>Star Wars API</Footer>
    </Layout>
  );
}

export default App;
