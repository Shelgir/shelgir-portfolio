import React, { useState } from "react";
import { Fieldset, Select } from "react95";

export default function Appearance() {
  const options = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "spruce", label: "Spruce" },
    { value: "forest", label: "Forest" },
  ];
  const [option, setOption] = useState(options[0]);

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <div>
      <Fieldset label="Appearance">
        <Select
          defaultValue={option}
          options={options}
          menuMaxHeight={160}
          width={160}
          onChange={handleChange}
        />
      </Fieldset>
    </div>
  );
}
