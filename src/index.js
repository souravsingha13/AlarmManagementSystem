import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from "./components/table";
import BasicTable from "./components/basictable";
import EnhancedTableHead from "./components/netable";
import { VanilaTable } from './components/vanilatable';
import { DataFatcher} from './components/datafatcher'

 
function getAllAlarms(){
  fetch('http://192.168.1.111:8000/alarm/all')
        .then(response => response.json())
        .then(data =>console.log(data));
}

var rows = [
    { id: 1, alarm_text: 'text1', alarm_state: 'acknowledge', date_time:"2020-10-2",priority:3},
    { id: 2, alarm_text: 'text3', alarm_state: 'unacknowledge', date_time:"2020-6-10",priority:2},
    { id: 3, alarm_text: 'text5', alarm_state: 'acknowledge', date_time:"2020-8-6",priority:5},
    { id: 4, alarm_text: 'text2', alarm_state: 'actioned', date_time:"2020-7-9",priority:1},
    { id: 5, alarm_text: 'text4', alarm_state: 'acknowledge', date_time:"2020-10-13",priority:8},
    { id: 6, alarm_text: 'text1', alarm_state: 'actioned', date_time:"2020-3-16",priority:4},
  ];

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
 // setInterval(getAllAlarms,5000);

ReactDOM.render(<DataFatcher/>, document.getElementById('root'));
