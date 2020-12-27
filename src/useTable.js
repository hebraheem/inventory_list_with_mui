import {
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(3),

    "& thead th": {
      fontWeight: "600",
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "fffbf2",
      cursor: "pointer",
    },
  },
}));

function useTable(records, HeadCells) {
  const classes = useStyles();
  //PAGINATION STATE
  const [page, setPage] = useState(0);
  const pages = [5, 10, 25];
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

  //SORTING STATE;
  const [order, SetOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  const TblContainer = ({ children }) => {
    return <Table className={classes.table}>{children}</Table>;
  };

  const TblHead = () => {
    const handleSortRequest = (cellId) => {
      const isAsc = orderBy === cellId && orderBy === "asc";
      SetOrder(isAsc ? "des" : "asc");
      setOrderBy(cellId);
    };

    return (
      <TableHead>
        <TableRow>
          {HeadCells.map((cells) => {
            return (
              <TableCell key={cells.id}>
                <TableSortLabel
                  active={orderBy === cells.id}
                  direction={orderBy === cells.id ? order : "asc"}
                  onClick={() => handleSortRequest(cells.id)}
                >
                  {cells.label}
                </TableSortLabel>{" "}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
    );
  };

  const handleChange = (event, newPage) => {
    setPage(newPage);
  };
  const handleRowsChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const TblPagination = () => {
    return (
      <TablePagination
        page={page}
        component="div"
        count={records.length}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={pages}
        onChangePage={handleChange}
        onChangeRowsPerPage={handleRowsChange}
      />
    );
  };
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const setRowRecordAndSorting = () => {
    return stableSort(records, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    );
  };
  return { TblContainer, TblHead, TblPagination, setRowRecordAndSorting };
}

export default useTable;
