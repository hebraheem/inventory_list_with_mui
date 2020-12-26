import React from 'react'
import {Button as MuiButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        margin: "8px"
    },
    label: {
        textTransform: "none"
    }
})

function Buttons({text, size, color, variant, onClick, ...other}) {
    const classes = useStyles()
    return (
       <MuiButton 
           variant={variant || "contained"}
           size={size || "large"}
           color={color || "primary"}
           onClick={onClick}
           {...other}
           classes={{root: classes.root, label: classes.label}}
       >{text}</MuiButton>
    )
}

export default Buttons;