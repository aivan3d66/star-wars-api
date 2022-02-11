import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {HomeMenu} from "./components/MainPage/Menu";
import {HeaderNav} from "./components/Navigation/HeaderNav";
import {
  Routes,
  Route
} from "react-router-dom";
import {PeoplePage} from "./components/PeoplePage/PeoplePage";
import {PlanetsPage} from "./components/PlanetsPage/PlanetsPage";
import {FilmsPage} from "./components/FilmsPage/FilmsPage";
import {SpeciesPage} from "./components/SpeciesPage/SpeciesPage";
import {VehiclesPage} from "./components/VehiclesPage/VehiclesPage";
import {StarshipsPage} from "./components/StarshipsPage/StarshipsPage";
import {Breadcrumbs} from "./components/commons/Breadcrumbs/Breadcrumbs";

const {Header, Content, Footer} = Layout;

function App() {
  return (
    <Layout>
      <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
        <div className="logo"/>
        <HeaderNav/>
      </Header>
      <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
        <Breadcrumbs style={{margin: "16px 0"}}/>
        <div className="site-layout-background" style={{padding: 0, minHeight: 380}}>
          <Routes>
            <Route path="/" element={<HomeMenu/>}/>
            <Route path="/people" element={<PeoplePage/>}/>
            <Route path="/planets" element={<PlanetsPage/>}/>
            <Route path="/films" element={<FilmsPage/>}/>
            <Route path="/species" element={<SpeciesPage/>}/>
            <Route path="/vehicles" element={<VehiclesPage/>}/>
            <Route path="/starships" element={<StarshipsPage/>}/>
          </Routes>
        </div>

      </Content>
      <Footer style={{textAlign: 'center'}}>Star Wars API</Footer>
    </Layout>
  );
}

export default App;
