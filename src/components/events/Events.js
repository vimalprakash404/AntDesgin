import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
const Events = (params) => {
    return (
        <div className="grid-view-container" >
      <Row gutter={[16, 16]}>
        {params.data.map((item, index) => (
            
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Link to={"/"}>
            <Card title={item.title}>
              {item.content}
            </Card>
            </Link>
          </Col>
          
        ))}
      </Row>
    </div>
    );
}
 
export default Events;