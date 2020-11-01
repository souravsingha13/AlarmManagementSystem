import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';

const useStyles = makeStyles({
  table: {
    minWidth: 50,
  },
  acknowledge :{
        backgroundColor: "yellow"
  },
  unacknowledge :{
    backgroundColor: "red"
  },
  panding:{
    backgroundColor: "green"

  },
  tablehead:{
    backgroundColor:"blue"
  }
});


var rows = [
    { id: 1, alarm_text: 'text1', alarm_state: 'acknowledge', date_time:"20.10.20" },
    { id: 2, alarm_text: 'text3', alarm_state: 'unacknowledge', date_time:"20.10.20" },
    { id: 3, alarm_text: 'text5', alarm_state: 'acknowledge', date_time:"18.10.20" },
    { id: 4, alarm_text: 'text2', alarm_state: 'panding', date_time:"18.10.20" },
    { id: 5, alarm_text: 'text4', alarm_state: 'acknowledge', date_time:"19.10.20" },
    { id: 6, alarm_text: 'text1', alarm_state: 'panding', date_time:"19.10.20" },
  ];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tablehead}>
          <TableRow>
              <TableCell>Checkbox</TableCell>
            <TableCell >ID</TableCell>
            <TableCell align="left">Alarm Text</TableCell>
            <TableCell align="left">Alarm State</TableCell>
            <TableCell align="left">Date Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} className={(row.alarm_state == "acknowledge")?classes.acknowledge:(row.alarm_state=="unacknowledge")?classes.unacknowledge:classes.panding}>
                {console.log(row.alarm_state)}
                <TableCell padding="checkbox">
            <Checkbox/>
          </TableCell>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell  align="left">{row.alarm_text}</TableCell>
              <TableCell align="left">{row.alarm_state}</TableCell>
              <TableCell align="left">{row.date_time}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
        <TableFooter className={classes.tablehead}>
          <TableRow>
            <TablePagination/>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}