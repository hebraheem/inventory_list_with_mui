import { Card, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import React from 'react'

const useStyles =  makeStyles({
    root :{
        backgroundColor: "#fdfdff"
    },
    pageheader: {
        padding: "32px",
        display: "flex",
        marginBottom: "24px"
    },
    pageIcon: {
        display: 'inlineBlock',
        padding: "16px",
        color: "#3c44b1"
    },
    pagetitle:{
        paddingLeft: "24px",
        '& .MuiTypography-subtitle2':{
            opacity: "0.6"
        }
    },
})

function PageHeader({ title, icon, subtitle }) {

    const classes = useStyles()
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageheader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pagetitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subtitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default PageHeader
