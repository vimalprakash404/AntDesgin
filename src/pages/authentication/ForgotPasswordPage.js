import React from 'react';
import { Card } from 'antd';
import ForgotPassword from '../../components/ForgotPassword';
import '../../css/Login.css';

const ForgotPasswordPage = () => {
  return (
    <div className="centered-card-page">
      <div className="centered-card-container">
        <Card title="Forgot Password" style={{ width: 600 }}>
        <ForgotPassword/>
      </Card>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
