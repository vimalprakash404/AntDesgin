import React from 'react';
import Icon from '@ant-design/icons';
import { Layout } from 'antd';
import { ReactComponent as logo } from "./image/logo.svg"
import SideBar from './components/dashboard/SideBar';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/dashboard/HomePage';
import ParticipantsPage from './pages/dashboard/ParticipantPage';
import VolunteersPage from './pages/dashboard/VolunteersPage';
import WorkShop from './pages/dashboard/WorkShop';
import Sample from './pages/Sample';

const { Header } = Layout;
const App = () => {
  const Headerpart=() =>{
    return(
    <><Header
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor : "white"
        }}
      >
      <div className="demo-logo" >
        <Icon component={logo} style={{ fontSize: '200px' }}/>
      </div>
       
      </Header>
      </>
    );
  }
  return (
    

    <Layout>
      <Headerpart></Headerpart>
      <Layout>
         <SideBar/>
         <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/participant" element={<ParticipantsPage/>}/>
          <Route path="/volunteerspage" element={<VolunteersPage/>}/>
          <Route path="/workshop" element={<WorkShop/>}/>
          <Route path="/Sample" element={<Sample/>}></Route>
         </Routes>
         
      </Layout>
    </Layout>

   
  );
};
export default App;