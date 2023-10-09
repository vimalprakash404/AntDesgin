import React, { useState } from 'react';
import { Button, Form } from 'antd';
import Field from './Field'; // Import the Field component

const FormEditor = () => {
  const [form] = Form.useForm();
  const [fields, setFields] = useState([]);

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const addField = () => {
    setFields([...fields, { name: `field${fields.length + 1}`, label: `Field ${fields.length + 1}` }]);
  };

  const handleTypeChange = (field, type) => {
    // Handle field type change here and update the fields array
    const updatedFields = fields.map((f) =>
      f.name === field.name ? { ...f, type } : f
    );
    setFields(updatedFields);
  };

  const handleLabelChange = (field, label) => {
    // Handle field label change here and update the fields array
    const updatedFields = fields.map((f) =>
      f.name === field.name ? { ...f, label } : f
    );
    setFields(updatedFields);
  };

  return (
    <div>
      <Button onClick={addField}>Add Field</Button>
      <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
        {fields.map((field, index) => (
          <Form.Item
            name={field.name}
            label={field.label}
            rules={[
              {
                required: true,
                message: 'This field is required!',
              },
            ]}
            key={index}
          >
            <Field
              field={field}
              onTypeChange={handleTypeChange}
              onLabelChange={handleLabelChange}
            />
          </Form.Item>
        ))}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormEditor;
