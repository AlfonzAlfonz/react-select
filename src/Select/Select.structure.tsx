import React from "react";

import {
  ContainerStyle,
  InputStyle,
  MenuStyle,
  ItemStyle,
  IndicatorStyle
} from "./styles";

export const Select = () => {
  return (
    <ContainerStyle>
      <InputStyle>
        Select option
        <IndicatorStyle open />
      </InputStyle>
      <MenuStyle>
        <ItemStyle>Option 1</ItemStyle>
        <ItemStyle>Option 2</ItemStyle>
      </MenuStyle>
    </ContainerStyle>
  );
};

export default Select;
