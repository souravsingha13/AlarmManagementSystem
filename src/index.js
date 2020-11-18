import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from './components/table';
import { DataFatcher} from './components/datafatcher'

//Start of the project by callig DataFatcher component.
//DataFatcher's job is to fatch all kind of data.
//Here we fatch data through http protocal and websocket.

ReactDOM.render(<DataFatcher/>, document.getElementById('root'));

