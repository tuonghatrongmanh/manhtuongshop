import { Button } from "antd";
import React from "react";

const ButtonComponent = ({ size, styleButton,styleTextButton ,textButton, ...otherProps }) => {
    // Use the props here
    return (
      <Button size={size} style={styleButton} {...otherProps}>
        <span style={styleTextButton}>{textButton}</span>
      </Button>
    );
  };
  

export default ButtonComponent