import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  FormHelperText,
} from "@material-ui/core";
import React from "react";

function Select({ name, label, value, error = null, onChange, options }) {
  return (
    <FormControl variant="outlined" {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect name={name} value={value} label={label} onChange={onChange}>
        <MenuItem value="">None </MenuItem>

        {options.map((item) => {
          const { id, title } = item;
          return (
            <MenuItem key={id} value={id}>
              {title}
            </MenuItem>
          );
        })}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}

export default Select;
