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
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/styles";
import useTable from "../../useTable";
import Controls from "../../controls/Controls";
import * as employeeService from "../../services/employeeData";
import Popup from "../../Popup";
import CloseIcon from "@material-ui/icons/Close";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const useStyles = makeStyles({
  pageContent: {
    margin: "40px",
    padding: "24px",
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "0px",
  },
});

const HeadCells = [
  { id: "fullname", label: "Employee Name" },
  { id: "email", label: "Email Address (personal)" },
  { id: "mobile", label: "Mobile number" },
  { id: "department", label: "Department" },
  { id: "actionButton", label: "Action", disableSorting: true },
];

function Empolyee() {
  // input and search
  const [records, setRecords] = useState(employeeService.getEmployee());
  const [search, setSearch] = useState({ fn: (items) => items });

  //for popup Dialog
  const [openPopup, setOpenPopup] = useState(false);

  //stete for edit
  const [edit, setEdit]= useState(null)

  const {
    TblContainer,
    TblHead,
    setRowRecordAndSorting,
    TblPagination,
  } = useTable(records, HeadCells, search);

  const classes = useStyles();

  const handleSearch = (e) => {
    let target = e.target;
    setSearch({
      fn: (items) => {
        if (target.value === "") {
          return items;
        } else {
          return items.filter((x) =>
            x.fullname.includes(target.value.toLowerCase())
          );
        }
      },
    });
  };

  const addOrEddit = (employee, resetForm) => {
    employeeService.insertEmployee(employee);
    setOpenPopup(false);
    //to imediately update the table
    setRecords(employeeService.getEmployee());
  };

  const openInPopup=(record)=>{
    setEdit(record)
    setOpenPopup(true)
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
          <Controls.Input
            className={classes.searchInput}
            label="Search Employee"
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{<Search />}</InputAdornment>
              ),
            }}
          />
          <Controls.Button
            className={classes.newButton}
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => setOpenPopup(true)}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {setRowRecordAndSorting().map((record) => {
              const {
                fullname,
                email,
                mobile,
                department,
                id,
              } = record;
              return (
                <TableRow key={id}>
                  <TableCell>{fullname}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{mobile}</TableCell>
                  <TableCell>{department}</TableCell>
                  <TableCell>
                    <Controls.ActionButton color="primary" onClick={()=>{openInPopup(record)}}>
                      <EditOutlinedIcon fontSize="small" />
                    </Controls.ActionButton>
                    <Controls.ActionButton color="secondary">
                      <CloseIcon fontSize="small" />
                    </Controls.ActionButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title="Employees Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm addOrEddit={addOrEddit} />
      </Popup>
    </div>
  );
}

export default Empolyee;
