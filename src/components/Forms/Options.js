import React, { useState } from 'react';
import Optionitem from './Optionitem';
import { Space , Input } from 'antd';

const Options = () => {
  // Sample array of options
  const initialOptions = ["Option 1", "Option 2", "Option 3"];
  const [options, setOptions] = useState(initialOptions);
  const [newOption, setNewOption] = useState('');

  const handleRemoveOption = (optionToRemove) => {
    // Create a new array without the option to remove
    const newOptions = options.filter((option) => option !== optionToRemove);
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    if (newOption.trim() === '') {
      return; // Don't add empty options
    }

    // Create a new array with the new option
    const newOptions = [...options, newOption];
    setOptions(newOptions);
    setNewOption('');
  };

  return (
    <>
      
      {options.map((option) => (
        <div key={option}>
        <Space wrap>
          <Optionitem data={option} />
          <button onClick={() => handleRemoveOption(option)}>Remove</button>
          </Space>
        </div>
      ))}
      <div>
        <Input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          onPressEnter={(e) => {setNewOption(e.target.value); handleAddOption();}}
        />
        <button onClick={handleAddOption}>Add</button>
      </div>
    </>
  );
};

export default Options;
