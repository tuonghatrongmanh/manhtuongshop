import { Button} from "antd";
import React from "react";
import {SearchOutLined} from '@ant-design/icons'
import InputComponent from "../InputComponent/InputComponent";
const ButtonInputSearch = () =>{
    return (
        <div> 
        <InputComponent placeholder="Basic Usage"></InputComponent>  
        <Button size='large' icon={<SearchOutLined/>}>Default</Button>  
         </div>
    )
}

export default ButtonInputSearch;