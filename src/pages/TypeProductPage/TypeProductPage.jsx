import React, { Fragment } from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperProducts } from "../HomePage/style";
import { WrapperNavbar } from "../../components/TypeProduct/style";

const TypeProductPage = () =>{
    const onChange = () =>{}
    return(

    <>
     <div style={{padding:'0 120px' , background:'#efefef',}}>
        <Row style={{ flexWrap:'nowrap', paddingTop:'10px'}}>
            <WrapperNavbar span={4} >
            <NavbarComponent></NavbarComponent>
            </WrapperNavbar>
                  
            <Col >
            <WrapperProducts span={20}>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            </WrapperProducts>
            <Pagination  defaultCurrent={2} total={100} onChange={onChange} style={{textAlign:'center', marginTop:'10px', marginLeft:'300px'}} ></Pagination>
            </Col>
        </Row>    

        </div>
    </>
              
    )
}

export default TypeProductPage