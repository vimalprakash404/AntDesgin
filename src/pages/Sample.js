import React, { useState } from 'react';
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

const Sample = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [contentStack, setContentStack] = useState([]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const addNewContent = () => {
    const newContent = (
      <Panel
        header={`New Content ${contentStack.length + 1}`}
        key={contentStack.length + 1}
      >
        <Collapse>
          <Panel header="Nested Collapse Panel" key="nested">
            This is a nested panel inside the new content.
          </Panel>
        </Collapse>
      </Panel>
    );
    setContentStack([...contentStack, newContent]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Webpage with Stackable Content and Nested Collapse</h1>
      <Button type="primary" onClick={toggleCollapse}>
        {isCollapsed ? 'Expand Content' : 'Collapse Content'}
      </Button>
      <Button type="primary" onClick={addNewContent}>
        Add New Content
      </Button>
      <Collapse>
        {contentStack.map((content, index) => (
          <React.Fragment key={index}>{content}</React.Fragment>
        ))}
        <Panel header="Initial Content" key="1">
          This is the initial content.
        </Panel>
      </Collapse>
    </div>
  );
};

export default Sample;
