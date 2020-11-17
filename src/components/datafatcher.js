import * as React from "react";
import * as ReactDom from "react-dom";
import { Table } from 'reactstrap';
import { VanilaTable } from "./vanilatable";



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

    prepareWS(){
        console.log(this.state.success)
        this.socket = new WebSocket("ws://192.168.1.41:8000/ws/alarm/");
        this.socket.onopen = (e) => {
            //console.log(this.state.data.reverse())
        }

        this.socket.onclose = (e) => {
            console.error('disconnected');
        };

        this.socket.onerror = (error) => {
            console.error('failed to connect', error);
        };

        this.socket.onmessage = (event) => {
            console.log('received', JSON.parse(event.data));
            var alarm = JSON.parse(event.data)['message']['alarm']
            var reverse_data = this.state.data.reverse()
            reverse_data.push(alarm)
            this.setState({
                data : reverse_data.reverse()
            })
        };
    }

    datapopulatorClass(data){
        this.setState({
            data:data, 
            loading:false, 
            success:true})
        this.prepareWS()   
    }

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
            <VanilaTable table_data = {this.state.data}/>
            </>
        )
    }

}