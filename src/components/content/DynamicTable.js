import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

const DynamicTable = ({data,columns}) => {
  const [tabledata, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API or source
    setTimeout(() => {
      setData(data);
      setLoading(false);
    }, 1000); // Simulate loading delay
  }, [data]);

 

  return (
    <Table
      dataSource={tabledata}
      columns={columns}
      loading={loading}
      pagination={{ pageSize: 10 }} // Customize pagination settings
    />
  );
};

export default DynamicTable;
