import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slide1.png";
import slider2 from "../../assets/images/slide2.jpg";
import slider3 from "../../assets/images/slide3.png";
import CardComponent from "../../components/CardComponent/CardComponent";

const HomePage = () => {
    const arr = ['TV', 'Máy Tính', 'Điện Thoại', 'Apple Watch', 'Thiết Bị', 'Dây Sạc', 'Lót Chuột', 'Bàn Phím', 'Tai Nghe', 'Tai Nghe Có Dây']
    return (
        <>
            <div style={{ padding: ' 0 120px' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item}></TypeProduct>
                        )
                    })}
                </WrapperTypeProduct>

            </div>
            <div id="container" style={{ backgroundColor: '#efefef', padding:'0 120px' , height:'1000px'}}>
                <SliderComponent arrImages={[slider1, slider2, slider3]} ></SliderComponent>
                <WrapperProducts>
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
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                </WrapperProducts>

            <div style={{width:'100%', display:'flex',justifyContent:'center',marginTop:'10px' }}>
            <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
                border:'1px solid  #00483d', color:'#00483d',width:'240px', height:'38px', borderRadius:'4px'
              }} styleTextButton={{fontWeight:500}} ></WrapperButtonMore>
            </div>

            </div>
        </>
    )
}
export default HomePage;