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

    componentDidMount(){
        fetch('http://192.168.1.111:8000/alarm/all')
        .then(response => response.json())
        .then(data => this.setState({
            data:data, 
            loading:false, 
            success:true}))
        .catch(error => this.setState({error:true, loading:false}))
        console.log("hello");
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