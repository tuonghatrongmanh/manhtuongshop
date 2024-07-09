import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
display:flex;
align-item:center;
gap:24px;
justify-content:flex-start;
border-bottom:1px solid #00483d;
height:30px;
margin-top:10px;
`

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
  color: #fff;
  background: #00483d;
  span {
  color: #fff;
  }
  }
  width:100%;
  text-align:center;
`

export const WrapperProducts = styled.div`
display:flex;
justify-content:center;
gap:15px;
margin-top:20px;
flex-wrap:wrap;
`