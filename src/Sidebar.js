import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles=makeStyles({
    sidebar:{
        width: "23.5%",
        minWidth: "100px",
        height: "100vh",
        backgroundColor: "#253053",
        position: "absolute",
        left: "0",
    }
})

function Sidebar() {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            
        </div>
    )
}

export default Sidebar
