import React, { useState } from 'react';
import { Input, Button, List, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function Options() {
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewOption(e.target.value);
  };

  const addOption = () => {
    if (newOption) {
      setOptions([...options, newOption]);
      setNewOption('');
    }
  };

  const editOption = (index) => {
    setEditingIndex(index);
    setNewOption(options[index]);
  };

  const updateOption = () => {
    if (newOption && editingIndex !== null) {
      const updatedOptions = [...options];
      updatedOptions[editingIndex] = newOption;
      setOptions(updatedOptions);
      setNewOption('');
      setEditingIndex(null);
    }
  };

  const deleteOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  return (
    <div>
      {/* <h2>Options List</h2> */}
      
      <List
        dataSource={options}
        renderItem={(option, index) => (
          <List.Item
            actions={[
              <Space>
                <EditOutlined onClick={() => editOption(index)} />
                <DeleteOutlined onClick={() => deleteOption(index)} />
              </Space>
            ]}
            onClick={() => editOption(index)}
          >
            {index === editingIndex ? (
              <Input
                type="text"
                value={newOption}
                onChange={handleInputChange}
              />
            ) : (
              option
            )}
          </List.Item>
        )}
      />
      <Input
        type="text"
        value={newOption}
        onChange={handleInputChange}
        placeholder="New Option"
        style={{ width: '300px' }}
      />
      <Button type="primary" onClick={ addOption }>
        { 'Add'}
      </Button>
    </div>
  );
}

export default Options;
