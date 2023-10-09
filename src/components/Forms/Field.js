import React, { useState } from 'react';
import { Card ,Divider, Input , Select ,Space} from 'antd';
import Options from './Options';

const Field = () => {
    const [selectedOption,setSelectedOptions] = useState("text")
    const [optionsSetter,setOptionsSetter]=useState(false);
    const [fieldTitleContent,setFieldContent] = useState(true);
    const [fieldTitle,setFieldTile]=useState("Field Name"); 
    const changeFeildtTitle = (e)=>{
        setFieldTile(e.target.value);
        toggleFieldTitle();
    }
    
    const toggleFieldTitle =()=>{
        setFieldContent(!fieldTitleContent);
    }
    const FieldTitle = ()=>{
        return (<div >
            {fieldTitleContent ?
                (<h1 onClick={toggleFieldTitle}>{fieldTitle}</h1>)
                : (<Input onPressEnter={changeFeildtTitle}/>)}
                </div>
        );
    }
    function changetype(e){
        console.log(e);
        if (e === "check box" ||e === "drop down" )
        {
            setOptionsSetter(true);
        }
        else 
        {
            setOptionsSetter(false);
        }
        setSelectedOptions(e);
    }
    return (
        <>
            <Card
                   
                    bordered={false}
                    style={{
                    width: '100%',
                    }}
            >
            <FieldTitle/>
                <Divider/>
                <Space wrap>
                <h3>type</h3>
                <Select
                    name="as"
                    defaultValue="text"
                    style={{ width: 120 }}
                    onChange={changetype}
                    options={[
                        {
                            label:'text',
                            options  : [
                                { value: 'text', label: 'text' },
                                { value: 'long text', label: 'long text' },
                                { value: 'email', label: 'email' },
                                { value: 'number', label: 'number' },
                                { value: 'phone', label: 'phone' },]
                        },
                        {
                            label:'Options',
                            options:[
                                { value: 'check box', label: 'check box' },
                                { value: 'drop down', label: 'drop down' }
                            ]
                        },
                        {
                            label : "Date and Time ",
                            options :[
                                {value: 'Date', label: 'Date' },
                                {value: 'Time', label: 'Time' }
                            ]
                        }
                        
                    ]}
                    />
                </Space>
                {optionsSetter ?   <Options/> :<p>{selectedOption}</p> }
                    
                    
            </Card>
        </>
    );
  
};

export default Field;
