import React, { useState } from "react";
import PageHeader from "../../PageHeader";
import EmployeeForm from "./EmployeeForm";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Paper, TableBody, TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import useTable from "../../useTable";
import * as employeeService from '../../services/employeeData'

const useStyles = makeStyles({
  pageContent: {
    margin: "40px",
    padding: "24px",
  },
});

const HeadCells = [
  { id: "fullname", label: "Employee Name" },
  { id: "email", label: "Email Address (personal)" },
  { id: "mobile", label: "Mobile number" },
  { id: "department", label: "Department" },
];

function Empolyee() {

  const [records, setRecords] = useState(employeeService.getEmployee());
  const { TblContainer, TblHead, setRowRecordAndSorting, TblPagination } = useTable(records, HeadCells);

  const classes = useStyles();
  return (
    <div>
      <PageHeader
        title="New Employee"
        icon={<SupervisedUserCircleIcon fontSize="large" />}
        subtitle="description"
      />
      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <TblContainer>
          <TblHead />
          <TableBody>
            {setRowRecordAndSorting().map((record) => {
              const { fullname, email, mobile, department, id } = record;
              return (
                <TableRow key={id}>
                  <TableCell>{fullname}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{mobile}</TableCell>
                  <TableCell>{department}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </div>
  );
}

export default Empolyee;
