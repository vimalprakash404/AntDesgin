import React from 'react';
import { Card , Col} from 'antd';


const WorkShopCard = ({ dataList }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {dataList.map((item) => (
        
        <Card 
          key={item.id} // Use a unique key for each card
          title={item.title}
          style={{ width: 300 }}
        >
          {item.description}
        </Card>
        
      ))}
    </div>
  );
};

export default WorkShopCard;
