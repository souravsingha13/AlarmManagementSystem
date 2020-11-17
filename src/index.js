import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from "./components/table";
import BasicTable from "./components/basictable";
import EnhancedTableHead from "./components/netable";
import { VanilaTable } from './components/vanilatable';
import { DataFatcher} from './components/datafatcher'



ReactDOM.render(<DataFatcher/>, document.getElementById('root'));

