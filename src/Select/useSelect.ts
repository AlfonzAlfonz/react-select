import { useState } from "react";

export type Option<TKey extends string | number, TValue> = {
  key: TKey;
  value: TValue;
};

export interface SelectControls<TKey extends string | number, TValue> {
  multi: boolean;
  options: Option<TKey, TValue>[];
  selected: TKey[];
  getOption: (k: TKey) => Option<TKey, TValue>;
  select: (k: TKey) => unknown;

  state: boolean;
  toggle: () => unknown;
  open: () => unknown;
  close: () => unknown;
}

export const useSelect = <
  TKey extends string | number = string | number,
  TValue = {}
>(
  options: Option<TKey, TValue>[],
  initialKey?: TKey
): [TKey | undefined, SelectControls<TKey, TValue>] => {
  const [selected, setSelected] = useState(initialKey);
  const openable = useOpenable();

  return [
    selected,
    {
      multi: false,
      options: options,
      selected: selected !== undefined ? [selected] : [],
      getOption: (k: TKey) => options.find(o => o.key === k)!,
      select: k => {
        setSelected(k);
        openable.close();
      },
      ...openable
    }
  ];
};

export const useMultiSelect = <
  TKey extends string | number = string | number,
  TValue = {}
>(
  options: Option<TKey, TValue>[],
  initialKeys?: TKey[]
): [TKey[], SelectControls<TKey, TValue>] => {
  const [selected, setSelected] = useState(initialKeys ?? []);
  const openable = useOpenable();

  return [
    selected,
    {
      multi: true,
      options,
      selected,
      getOption: (k: TKey) => options.find(o => o.key === k)!,
      select: k => {
        setSelected(s => (s.includes(k) ? s.filter(x => x !== k) : [...s, k]));
        openable.close();
      },
      ...openable
    }
  ];
};

const useOpenable = () => {
  const [state, setState] = useState(false);
  return {
    state,
    toggle: () => {
      console.log("toggle");
      setState(s => !s);
    },
    open: () => setState(true),
    close: () => {
      console.log("close");
      setState(false);
    }
  };
};
