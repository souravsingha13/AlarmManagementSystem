import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'alarm_text', headerName: 'Alarm Text', width: 200 },
  { field: 'alarm_state', headerName: 'Alarm State', width: 200 },
  {
    field: 'date_time',
    headerName: 'Date_Time',
    width: 200,
  },
];

const rows = [
  { id: 1, alarm_text: 'text1', alarm_state: 'acknowledge', date_time:"20.10.20" },
  { id: 2, alarm_text: 'text3', alarm_state: 'unacknowledge', date_time:"20.10.20" },
  { id: 3, alarm_text: 'text5', alarm_state: 'acknowledge', date_time:"18.10.20" },
  { id: 4, alarm_text: 'text2', alarm_state: 'panding', date_time:"18.10.20" },
  { id: 5, alarm_text: 'text4', alarm_state: 'acknowledge', date_time:"19.10.20" },
  { id: 6, alarm_text: 'text1', alarm_state: 'panding', date_time:"19.10.20" },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection  color ="red"/>
    </div>
  );
}
/*

var arr = new Array();
var id = 1;

function objGenerator(){
    const alarmState =["unacknowledge","acknowlede","panding"];
    const text =["text1","text2","text3","text4","text5"];
    var obj = {
    "alarm_id" : id++,
    "alarm_text" : text[Math.floor(Math.random()*text.length)],
    "alarm_state" : alarmState[Math.floor(Math.random()*alarmState.length)],
    "date_time": new Date()
  }
  arr.push(obj);
  console.log(arr);
}
//setInterval(objGenerator,5000);

*/
/* 
fatch("URL we want to call",{
   method: "POST",
   body: JSON.stringify({
     userId: 1,
     title: "clean room",
     completed: false}),
     headers: {"Content-type": "application/json; charset=UTF-8"}
 })
 .then(response => response.json())
 .then(json => console.log(json))

*/