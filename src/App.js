import { makeStyles } from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import React from 'react'
import './App.css';
import Nav from './Nav';
import Sidebar from './Sidebar';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Empolyee from './pages/employees/Empolyee';

const useStyles = makeStyles({
  container: {
    paddingLeft: "23.5%",
    width: "100%"
  }
})

const theme = createMuiTheme({
  palette:{
    primary: {
      main: "#333996",
      light: "#3c44b126"
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    }
  }
})

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <div className={classes.container}>
        <Nav />
        <Empolyee/>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
