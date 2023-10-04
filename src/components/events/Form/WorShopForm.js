import { Form,Select,Input } from "antd";
const { Option } = Select;
const WorkShopForm = (params)=> {
    const onFinish = (values) => {
        // You can handle the final form submission here
        console.log('Received values:', values);
      };
     
    return (
        <div>
        <Form form={params.form} onFinish={onFinish}>
          {/* Workshop Registration Form Fields */}
          <Form.Item
            name="workshopName"
            label="Workshop Name"
            rules={[{ required: true, message: 'Please enter the workshop name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="workshopDate"
            label="Workshop Date"
            rules={[{ required: true, message: 'Please select the workshop date' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="workshopLocation"
            label="Workshop Location"
            rules={[{ required: true, message: 'Please enter the workshop location' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="workshopType"
            label="Workshop Type"
            rules={[{ required: true, message: 'Please select the workshop type' }]}
          >
            <Select>
              <Option value="technical">Technical</Option>
              <Option value="non-technical">Non-Technical</Option>
            </Select>
          </Form.Item>
        </Form>
        </div>
    );
}
export default WorkShopForm;