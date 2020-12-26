import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect } from "react";
import Controls from "../../controls/Controls";
import { useForm, Form } from "../../useForm";
import * as employeeService from "../../services/employeeData"

const initialValues = {
  id: 0,
  fullname: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hiredDate: new Date(),
  isPermanent: false,
};

function EmployeeForm() {
  const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
  ];

  const { values, setValues,resetFunction, handleChange, errors, setErrors } = useForm(initialValues);

  const validate = () =>{
      let temp ={}
      temp.fullname = values.fullname ? "" : "This field is required."
      temp.email = (/$^|.+@.+..+/).test(values.email) ? "" : "Enter a valid email."
      temp.mobile = values.mobile.length>9 ? "" : "Minimum ten numbers required."
      temp.city = values.city ? "" : "This field is required."
      temp.departmentId = values.departmentId? "" : "This field is required."

      setErrors({...temp})

      return Object.values(temp).every(x => x == "")
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(validate()){
          employeeService.insertEmployee(values)
      }
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Controls.Input
            label="Full Name"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
            error={errors.fullname}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Controls.Input
            label="mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleChange}
            error={errors.mobile}
          />
          <Controls.Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleChange}
            error={errors.city}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            value={values.departmentId}
            label="Department"
            onChange={handleChange}
            options={employeeService.getDepartment()}
            error={errors.departmentId}
          />
          <Controls.Datepicker
            name="hiredDate"
            label="Hire Date"
            value={values.hiredDate}
            onChange={handleChange}
          />
          <Controls.Checkbox
            name="isPermanent"
            ckecked=""
            label="Permanent Empolyee"
            value={values.isPermanent}
            onChange={handleChange}
          />
          <div>
            <Controls.Button text="Submit" type="submit" />
            <Controls.Button
              text="Reset"
              color="default"
              onClick={resetFunction}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
