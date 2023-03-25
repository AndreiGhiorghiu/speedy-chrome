import React from 'react';
import ReactDom from 'react-dom';

import Options from './Options';
import './index.css';

const container = document.getElementById('app-container');

ReactDom.render(<Options title={'Settings'} />, container);
