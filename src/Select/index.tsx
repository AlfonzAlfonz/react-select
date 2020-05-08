import React from "react";

import {
  ContainerStyle,
  InputStyle,
  GroupStyle,
  IndicatorStyle,
  ItemStyle,
  MenuStyle,
  SelectedStyle
} from "./styles";
import { SelectControls } from "./useSelect";

export type Props<TKey extends string | number, TValue> = SelectControls<
  TKey,
  TValue
> & { valueToString: (v: TValue) => string } & React.HTMLAttributes<
    HTMLDivElement
  >;

export const Select = <TKey extends string | number, TValue>({
  options,
  multi,
  selected,
  select,
  getOption,
  valueToString,
  state,
  toggle,
  open,
  close,
  id,
  ...props
}: Props<TKey, TValue>) => {
  return (
    <ContainerStyle {...props} tabIndex={0} onFocus={open} onBlur={close}>
      <InputStyle onClick={open}>
        {selected.length ? (
          <GroupStyle>
            {multi &&
              selected.map(k => (
                <SelectedStyle key={k}>
                  {valueToString(getOption(k).value)}
                </SelectedStyle>
              ))}
            {!multi && valueToString(getOption(selected[0]).value)}
          </GroupStyle>
        ) : (
          "Select option"
        )}
        <IndicatorStyle open={state} />
      </InputStyle>
      {state && (
        <MenuStyle>
          {options.map(o => (
            <ItemStyle
              key={o.key}
              onClick={() => select(o.key)}
              selected={selected.includes(o.key)}
            >
              {valueToString(o.value)}
            </ItemStyle>
          ))}
        </MenuStyle>
      )}
    </ContainerStyle>
  );
};

export default Select;
