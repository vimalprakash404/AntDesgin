import { Form ,Input } from "antd";
const AddEventsForm = (params)=>{
  const onFinish = (values) => {
    // You can handle the final form submission here
    console.log('Received values:', values);
  };
  
 return (
    <>
     <Form form={params.form} onFinish={onFinish}>
          {/* Event Registration Form Fields */}
          <Form.Item
            name="eventName"
            label="Event Name"
            rules={[{ required: true, message: 'Please enter the event name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="eventDate"
            label="Event Date"
            rules={[{ required: true, message: 'Please select the event date' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="eventLocation"
            label="Event Location"
            rules={[{ required: true, message: 'Please enter the event location' }]}
          >
            <Input />
          </Form.Item>
        </Form>
    </>
 );
}
export default AddEventsForm;