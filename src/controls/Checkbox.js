import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";
import React from "react";

function Checkbox({ name, value, label, onChange }) {

  const convertToCheckpara = (name, value) => {
    return {
      target: {
        name,
        value,
      },
    };
  };

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            onChange={e=>onChange(convertToCheckpara(name, e.target.checked))}
            checked={value}
            color="primary"
          />
        }
        label={label}
      />
    </FormControl>
  );
}

export default Checkbox;
