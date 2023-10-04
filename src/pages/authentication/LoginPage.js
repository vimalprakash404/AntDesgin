import React from 'react';
import { Card } from 'antd';
import Login from '../../components/Login';
import '../../css/Login.css';

const LoginPage = () => {
  return (
    <div className="centered-card-page">
      <div className="centered-card-container">
        <Card title="Login" style={{ width: 300 }}>
        <Login/>
      </Card>
      </div>
    </div>
  );
};

export default LoginPage;
