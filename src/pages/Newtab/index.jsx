import React from 'react';
import ReactDom from 'react-dom';

import Newtab from './Newtab';
import './index.css';

const container = document.getElementById('app-container');
ReactDom.render(<Newtab />, container);
