import React from 'react';
import { Card } from 'antd';
import Registration from '../../components/Registration';
import '../../css/Login.css';

const RegistrationPage = () => {
  return (
    <div className="centered-card-page">
      <div className="centered-card-container">
        <Card title="Registration" style={{ width: 600 }}>
        <Registration/>
      </Card>
      </div>
    </div>
  );
};

export default RegistrationPage;
