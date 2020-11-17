import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Table } from 'reactstrap';



export class Row extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id : this.props.tablebodydata.alarm_id,
            state:this.props.tablebodydata.state,
            message:this.props.tablebodydata.message,
            timestamp:this.props.tablebodydata.timestamp,
            priority:this.props.tablebodydata.priority
        }
    }

    onDoubleClick(alarm_id,state){
        if(state == "unacknowledged"){
            fetch("http://192.168.1.41:8000/alarm/"+alarm_id.toString(),{
                method:"POST",
                body:JSON.stringify({
                    alarm_id : alarm_id,
                    alarm_state : "acknowledged"
                }),
                headers: {"Content-type": "application/json"}
            })
            .then(response => response.json())
            .then((data)=>{
                
                    this.setState({
                        state : "acknowledged",
                        timestamp : data.alarm.timestamp
                    })
                
            
            });
        }
    }

    render(){
        return(
            <tr id={this.state.id} key ={this.state.id} 
            className ={(this.state.state == "acknowledged")?"table-success":(this.state.state=="unacknowledged")?"table-danger":"table-primary"}
             onDoubleClick ={this.onDoubleClick.bind(this,this.state.id,this.state.state)}>
                <td scope="row">{this.state.id}</td>
                <td>{this.state.state}</td>
                <td>{this.state.message}</td>
                <td>{this.state.timestamp}</td>
                <td>{this.state.priority}</td>
            </tr>
        )
    }

}