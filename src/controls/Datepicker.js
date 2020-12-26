import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function Datepicker({ name, value, label, onChange }) {
  const convertToDatepara = (name, value) => {
    return {
      target: {
        name,
        value,
      },
    };
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MMM/dd/YYY"
        value={value}
        onChange={(date) => onChange(convertToDatepara(name, date))}
      ></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
}

export default Datepicker;
