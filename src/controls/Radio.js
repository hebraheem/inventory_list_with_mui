import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio as MuiRadio,
} from "@material-ui/core";

function Radio({ name, value, onChange, label, items }) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item) => {
          return (
            <FormControlLabel
              key={item.id}
              value={item.id}
              label={item.title}
              control={<MuiRadio />}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default Radio;
