import React from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "../SignInPage/style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageLogo from '../../assets/images/logo-login.png'
const SignUpPage = () =>{

    return (

        <div style={{display:'flex',alignItems:'center', justifyContent:'center', background:'rgb(0,0,0,0.53)', height:'100vh'}}>
            <div style={{width:'800px', height:'445px', borderRadius:'6px', background:'#fff',display:'flex'}}>
            <WrapperContainerLeft>
                <h1>Xin chào</h1>
                <p>Đăng nhập vào tài khoản</p>
                <InputForm style={{marginBottom:'10px'}} placeholder="abc@gmai.com"></InputForm>
                <InputForm style={{marginBottom:'10px'}} placeholder="password"></InputForm>
                <InputForm placeholder="confirm password"></InputForm>
                <ButtonComponent
            size={40}
            styleButton={{
                background:'rgb(255, 57, 69)',
                height:'48px',
                width:'100%',
                border:'none',
                borderRadius:'4px',
                margin:'26px 0 10px'
            }}
            textButton={'Đăng Nhập'}
            styleTextButton={{color:'#fff' , fontWeight:'700'}}
            >
            </ButtonComponent>
            <p>Bạn đã có tài khoản? <WrapperTextLight>Đăng ký</WrapperTextLight></p>
            </WrapperContainerLeft>
            <WrapperContainerRight>
            <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px"></Image>
            <h4>Mua sắm tại MANHTUONG.SHOP </h4>
            </WrapperContainerRight>
        </div>
        </div>
    )
}

export default SignUpPage