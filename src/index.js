import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import config_data from './components/Configration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/authentication/LoginPage';
import RegistrationPage from './pages/authentication/RegistrationPage';
import ForgotPasswordPage from './pages/authentication/ForgotPasswordPage';
import EvehtsPage from './pages/dashboard/EventsPage';

import AddEventsPage from './pages/dashboard/AddEventPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={config_data}>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
        <Route path ="events" element={<EvehtsPage/>}/>
        <Route path="/add-event" element={<AddEventsPage/>}/>
    </Routes>
    </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
