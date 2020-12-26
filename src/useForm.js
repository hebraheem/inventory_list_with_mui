import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetFunction = () => {
    setValues(initialValues);
    setErrors({})
  };

  return { values, setValues, handleChange,errors, setErrors, resetFunction };
}


const useStyles = makeStyles({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: "8px",
    },
  },
});

export const Form = ({children, ...other}) => {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete='off' {...other}>
      {children}
    </form>
  );
};
