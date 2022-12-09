import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/App.js";
import { StateProvider } from './component/Stateprovider.js';
import './index.css';
import reducer, { initialState } from './component/reducer'

ReactDOM.render(

<React.StrictMode>
<StateProvider initialState={initialState} reducer={reducer}>
<App/>
</StateProvider>
</React.StrictMode>

,document.getElementById('root'));



