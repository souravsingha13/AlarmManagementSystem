import * as React from "react";
import * as ReactDom from "react-dom";
import { Table } from 'reactstrap';
import { AlarmTable } from "./table";



export class DataFatcher extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            loading:true,
            error:false,
            success:false,
            data:null
        }
        
    }
//following function is the mathod of this calss component which will prepare websocket connection.
    prepareWS(){
        console.log(this.state.success)
        //connect  with the web socket
        this.socket = new WebSocket("ws://192.168.1.41:8000/ws/alarm/");
        this.socket.onopen = (e) => {
            console.log("Connected")
        }

        this.socket.onclose = (e) => {
            console.error('Disconnected');
        };

        this.socket.onerror = (error) => {
            console.error('failed to connect', error);
        };

        //In on message it will receive data which will be a object.
        //This object will be convarted into json data.
        //After making it json data this function will check if this data is duplicate or not 
        //if this data isn't a duplicate then make the table's data (which is an array) reverse and push the new data
        //into the array and again reverse it to get the new data top of the table.


        this.socket.onmessage = (event) => {
            //console.log('received', JSON.parse(event.data)['message']['alarm']);
            var alarm = JSON.parse(event.data)['message']['alarm']
            //console.log((this.state.data))
            //console.log(this.state.data)

            if(this.state.data.find(e =>(e.alarm_id == alarm.alarm_id ))){
               console.log("found match")
            }else{
                var reverse_data = this.state.data.reverse()
                reverse_data.push(alarm)
                console.log(alarm)
                this.setState({
                    data : reverse_data.reverse()
                })
            }
            
        };
    }
 //datapopulator is the mathod of this class component which takes an argument and changes the state of the component
 //and also calls prepareWS for websocket connection.
    datapopulatorClass(data){
        this.setState({
            data:data, 
            loading:false, 
            success:true})
        this.prepareWS()   
    }

    //After first render of this component the following function will run and that it will fatch all alarm 
    // which will convarted into json and pass to the datapopulator function.

    componentDidMount(){
        fetch('http://192.168.1.41:8000/alarm/all')
        .then(response => response.json())
        .then(data => this.datapopulatorClass(data))
        .catch(error => this.setState({error:true, loading:false}));

    }

    render(){
        if(this.state.loading) {
            return <p>Loading Loading ...</p>
        }
        return(
            <>
            <AlarmTable table_data = {this.state.data}/>
            </>
        )
    }

}