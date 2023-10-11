import { useState } from "react";
import {Input} from "antd";
function Optionitem({data})
{
    const toggleEditable= () => {
        setEditable(!isEditable);
    }
    const changeData = (event) => {
        setItemData(event.target.value)
        toggleEditable();
    }
    const [itemData, setItemData]= useState(data)
    const [isEditable,setEditable]=useState(false)
    return (
        <>
        {isEditable ?<Input  onPressEnter={changeData} /> :<h4 onClick={toggleEditable}>{itemData}</h4> }
        </>
    );

}
export default Optionitem;