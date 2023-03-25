import React from 'react';
import ReactDom from 'react-dom';

import Panel from './Panel';
import './index.css';

const container = document.getElementById('app-container');

ReactDom.render(<Panel />, container);
