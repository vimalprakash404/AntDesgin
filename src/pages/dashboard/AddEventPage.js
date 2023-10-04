import WorkShopForm from "../../components/events/Form/WorShopForm";
import AddEventsForm from "../../components/events/Form/AddEventForm";
import React, { useState } from 'react';
import { Steps, Button, Form,  } from 'antd';
const { Step } = Steps;
const AddEventsPage  = () => {
    const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();

  const nextStep = () => {
    form
      .validateFields()
      .then(() => {
        setCurrentStep(currentStep + 1);
      })
      .catch((errorInfo) => {
        console.error('Form validation failed:', errorInfo);
      });
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  
  const steps =[
    {
        title : "Event Registration ",
        content : <AddEventsForm form={form}/>
    },
    {
        title : "WorkShop Registration",
        content : <WorkShopForm form={form}/>
    }
  ]
  return (
    <div style={{ padding: '20px' }}>
      <Steps current={currentStep}>
        {steps.map((step) => (
          <Step key={step.title} title={step.title} icon={step.icon} />
        ))}
      </Steps>
      <div style={{ marginTop: '20px' }}>{steps[currentStep].content}</div>
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        {currentStep > 0 && (
          <Button style={{ marginRight: '8px' }} onClick={prevStep}>
            Previous
          </Button>
        )}
        {currentStep < steps.length - 1 && (
          <Button type="primary" onClick={nextStep}>
            Next
          </Button>
        )}
        {currentStep === steps.length - 1 && (
          <Button type="primary" onClick={form.submit}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
        }
export default AddEventsPage ;
    