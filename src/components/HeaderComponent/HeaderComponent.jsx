import { Badge, Col} from "antd";
import React from "react";
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";
import Search from "antd/es/transfer/search";
import {
    UserOutlined, CaretDownOutlined,ShoppingCartOutlined
} from '@ant-design/icons'

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader>
                <Col span={6}>
                    <WrapperTextHeader>MANHTUONG</WrapperTextHeader>
                </Col>
                <Col span={12}>

          <Search>
        placeholder="input search text"
        enterButton
          </Search>

                </Col>
                <Col span={6} style={{display: 'flex', gap:'20px'}} >
                   <WrapperHeaderAccount> 
                    <UserOutlined style={{fontSize:'30px'}} />
                   <div>
                    <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                    <div>
                    <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                    <CaretDownOutlined />
                    </div>
                   </div>
                   </WrapperHeaderAccount>

                     <div>
                        <Badge count={4} size="small">
                        <ShoppingCartOutlined  style={{fontSize:'30px', color:'#fff'}} />
                        </Badge>
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                        
                     </div>

                </Col>
            </WrapperHeader>
        </div>
    )
}
export default HeaderComponent;