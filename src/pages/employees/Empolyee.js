import React from 'react'
import PageHeader from '../../PageHeader'
import EmployeeForm from './EmployeeForm';
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import {Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    pageContent: {
        margin : "40px",
        padding: "24px",
    }
})

function Empolyee() {
    const classes = useStyles();
    return (
      <div>
        <PageHeader
          title="New Employee"
          icon={<SupervisedUserCircleIcon fontSize="large" />}
          subtitle="description"
        />
        <Paper className={classes.pageContent}>
          <EmployeeForm />
        </Paper>
      </div>
    );
}

export default Empolyee
