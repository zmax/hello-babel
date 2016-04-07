import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/helloMessage';
import TodosApp from './components/todos';

import './helpers/functions';

ReactDOM.render(<HelloMessage name="John" />, document.getElementById("app"));
ReactDOM.render(<TodosApp />, document.getElementById("todos"));
