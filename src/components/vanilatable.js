import * as React from "react";
import * as ReactDom from "react-dom";
import { Table } from 'reactstrap';



export class VanilaTable extends React.Component{
    
    onDoubleClick(){
        alert("clicked")
    }
    sortTable(){
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("table");
        switching = true;
        while(switching){
            switching = false;
            rows = table.rows;
            console.log(table.rows);
            for (i = 1; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                x = rows[i].getElementsByTagName("TD")[4];
                console.log(typeof(x))
                y = rows[i + 1].getElementsByTagName("TD")[4];
                //check if the two rows should switch place:
            if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
                }
            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            }
            }
        
        }
        sortDate(){
            var table, rows, switching, i, x, y, shouldSwitch;
            table = document.getElementById("table");
            switching = true;
            while(switching){
                switching = false;
                rows = table.rows;
                console.log(table.rows);
                for (i = 1; i < (rows.length - 1); i++) {
                    //start by saying there should be no switching:
                    shouldSwitch = false;
                    /*Get the two elements you want to compare,
                    one from current row and one from the next:*/
                    x = rows[i].getElementsByTagName("TD")[3];
                    //console.log(new Date(x));
                    y = rows[i + 1].getElementsByTagName("TD")[3];
                    //check if the two rows should switch place:
               if (new Date(x.innerHTML) < new Date(y.innerHTML)) {
                   //console.log("true")
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                    }
                   // console.log("false");
                }
                if (shouldSwitch) {
                    /*If a switch has been marked, make the switch
                    and mark that a switch has been done:*/
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                }
               
            }

        }
        sortState(){
            var table, rows, switching, i, x, y, shouldSwitch;
            table = document.getElementById("table");
            switching = true;
            while(switching){
                switching = false;
                rows = table.rows;
                console.log(table.rows);
                for (i = 1; i < (rows.length - 1); i++) {
                    //start by saying there should be no switching:
                    shouldSwitch = false;
                    /*Get the two elements you want to compare,
                    one from current row and one from the next:*/
                    x = rows[i].getElementsByTagName("TD")[1];
                    //console.log(new Date(x));
                    y = rows[i + 1].getElementsByTagName("TD")[1];
                    //check if the two rows should switch place:
               if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                   //console.log("true")
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                    }
                   // console.log("false");
                }
                if (shouldSwitch) {
                    /*If a switch has been marked, make the switch
                    and mark that a switch has been done:*/
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                }
               
            }

        }

    render(){
        console.log(this.props.table_data[0].id)
        return(
            < div id = "container">
                <p><button onClick={this.sortTable}>Priority Sort</button></p>
                <p><button onClick={this.sortDate}>Date_Time Sort</button></p>
                <p><button onClick={this.sortState}>State Sort</button></p>
                <Table id ="table">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Alarm State</th>
                            <th>Alarm Text</th>
                            <th>Date Time</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody className="table-hover">
                        {
                           this.props.table_data.map((row)=>(
                            <tr key={row.id} className={(row.alarm_state == "acknowledge")?"table-success":(row.alarm_state=="unacknowledge")?"table-danger":"table-primary"}
                            onDoubleClick={this.onDoubleClick} 
                            >
                                <td scope="row">{row.alarm_id}</td>
                                <td>{row.state}</td>
                                <td>{row.message}</td>
                                <td>{row.timestamp}</td>
                                <td>{row.priority}</td>
                            </tr>
                           ))
                        
                        }
                    </tbody>

                </Table>

            </div>
        )
    }
}