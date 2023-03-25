import React from 'react';
import ReactDom from 'react-dom';

import Popup from './Popup';
import './index.css';

const container = document.getElementById('app-container');

ReactDom.render(<Popup />, container);
