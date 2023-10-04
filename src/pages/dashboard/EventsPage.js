import React from "react";
import { Layout ,Button } from "antd";
import Icon ,{PlusOutlined }from '@ant-design/icons';
import { ReactComponent as logo } from "../../image/logo.svg"
import Events from "../../components/events/Events";




const EvehtsPage =()=>{
    const data = [
        {
          title: 'Card 1',
          content: 'This is the content for Card 1.',
        },
        {
          title: 'Card 2',
          content: 'This is the content for Card 2.',
        },
        {
          title: 'Card 3',
          content: 'This is the content for Card 3.',
        },
        {
            title: 'Card 1',
            content: 'This is the content for Card 1.',
          },
          {
            title: 'Card 2',
            content: 'This is the content for Card 2.',
          },
          {
            title: 'Card 3',
            content: 'This is the content for Card 3.',
          },
        // Add more cards as needed
      ];
    const { Header, Content  } =  Layout ;
    return (
        <>
        <Layout>
            <Header
            style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                <div className="demo-logo" >
                    <Icon component={logo} style={{ fontSize: '200px' }}/>
                </div>
                <div>
                    <Button type="primary" style={{margin:"50px"}}>Add Event <PlusOutlined /></Button>
                </div>
            </Header>
            <Content>
                <Events data={data}/>
               
            </Content>
        </Layout>
        </>
    );
}
export default  EvehtsPage;