import React, { useState } from "react";
import PageHeader from "../../PageHeader";
import EmployeeForm from "./EmployeeForm";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import {
  Paper,
  TableBody,
  Toolbar,
  TableCell,
  TableRow,
  InputAdornment,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import useTable from "../../useTable";
import Controls from "../../controls/Controls";
import * as employeeService from "../../services/employeeData";

const useStyles = makeStyles({
  pageContent: {
    margin: "40px",
    padding: "24px",
  },
  searchInput:{
    width: "75%",
  }
});

const HeadCells = [
  { id: "fullname", label: "Employee Name" },
  { id: "email", label: "Email Address (personal)" },
  { id: "mobile", label: "Mobile number" },
  { id: "department", label: "Department" },
];

function Empolyee() {
  const [records, setRecords] = useState(employeeService.getEmployee());
  const [search, setSearch] = useState({fn:items=> {return items}})
  const {
    TblContainer,
    TblHead,
    setRowRecordAndSorting,
    TblPagination,
  } = useTable(records, HeadCells, search);

  const classes = useStyles();

  const handleSearch =(e)=>{
    let target = e.target;
    setSearch({
      fn: items=> {
        if(target.value=''){
          return items;
        } else {
          return items.filter(item => item.fullName.toLowerCase().includes(target.value))
        }
      }
    })
  }

  return (
    <div>
      <PageHeader
        title="New Employee"
        icon={<SupervisedUserCircleIcon fontSize="large" />}
        subtitle="description"
      />
      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <Toolbar>
          <Controls.Input className={classes.searchInput}
            label="Search Employee"
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{<Search />}</InputAdornment>
              ),
            }}
          />
        </Toolbar>
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
