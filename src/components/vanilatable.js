import * as React from "react";
import * as ReactDom from "react-dom";
import { Table } from 'reactstrap';
import { TableBody } from "./tablebody";




export class VanilaTable extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data:this.props.table_data
        }
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
        selectionBar(){
            var input, filter, table, tr, td, i, txtValue;
                input = document.getElementById("selectionbar");
                filter = input.value.toLowerCase();
                table = document.getElementById("table");
                tr = table.getElementsByTagName("tr");
                // Loop through all table rows, and hide those who don't match with the query
                for(i=0;i<tr.length;i++){
                    td = tr[i].getElementsByTagName("td")[1];
                    if (td) {
                        txtValue = td.textContent || td.innerText;
                        if (txtValue.toLowerCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none";
                        }
                    }   

                }           
        }

    render(){
        return(
            < div id = "container">
                <select className="custom-select" id = "selectionbar" onChange={this.selectionBar}>
                <option></option> 
                    <option>Acknowledged</option> 
                    <option>Unacknowledged</option>  
                    <option>Actioned</option> 
                </select> 
                <Table id ="table">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th onClick={this.sortState}>Alarm State</th>
                            <th>Alarm Text</th>
                            <th onClick={this.sortDate}>Date Time</th>
                            <th onClick={this.sortTable}>Priority</th>
                        </tr>
                    </thead>
                    <tbody className="table-hover">
                        {
                           this.state.data.map((row)=>(
                            <TableBody tablebodydata={row} key ={row.alarm_id}/>
                           ))
                        
                        }
                    </tbody>
                
                </Table>

            </div>
        )
    }
}