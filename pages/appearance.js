import React, { useState } from "react";
import { Fieldset, Select, Button } from "react95";
import { useTheme } from "../context/ThemeContext";

export default function Appearance() {
  const options = [
    { value: "tokyoDark", label: "Tokyo Dark" },
    { value: "matrix", label: "Matrix" },
    { value: "spruce", label: "Spruce" },
    { value: "blackAndWhite", label: "Black and White" },
    { value: "redWine", label: "Red Wine" },
  ];
  const [option, setOption] = useState(options[0]);

  const { selectedTheme, setSelectedTheme, themes } = useTheme();
  console.log(themes);

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const handleTheme = () => {
    const chosenTheme = themes.find((theme) => theme.name === option);
    console.log(chosenTheme);
    setSelectedTheme(chosenTheme);
  };

  return (
    <div>
      <Fieldset label="Appearance" className="flex gap-4">
        <Select
          defaultValue={option}
          options={options}
          menuMaxHeight={160}
          width={200}
          onChange={handleChange}
        />
        <Button
          onClick={() => {
            handleTheme();
          }}
        >
          Magic 💫
        </Button>
      </Fieldset>
    </div>
  );
}
