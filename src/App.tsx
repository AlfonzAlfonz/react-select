import React, { FC } from "react";

import Select from "./Select";
import { useMultiSelect, useSelect } from "./Select/useSelect";

const options = [
  { id: 0, title: "AAA", text: "Lorem ipsum..." },
  { id: 1, title: "BBB", text: "Lorem ipsum..." },
  { id: 2, title: "CCC", text: "Lorem ipsum..." }
].map(o => ({ key: o.id, value: o }));

const App: FC = () => {
  const [selected, controls] = useSelect(options);
  const [selectedMulti, controlsMulti] = useMultiSelect(options);

  return (
    <div style={{ width: "50vw", margin: "auto" }}>
      <h1>Single-value select</h1>
      <p>Selected value: {selected}</p>
      <Select {...controls} valueToString={v => v.title} />

      <h1>Multiple-value select</h1>
      <p>Selected values: {selectedMulti.join(", ")}</p>
      <Select {...controlsMulti} valueToString={v => v.title} />

      <h1>HTML select</h1>
      <div>
        <select>
          {options.map(o => (
            <option key={o.key} value={o.key}>
              {o.value.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default App;
