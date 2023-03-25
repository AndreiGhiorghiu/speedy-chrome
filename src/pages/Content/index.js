import React from 'react';
import Chat from './Chat';
import ReactDom from 'react-dom';

function init() {
  const el = document.createElement('div');
  el.setAttribute('className', 'speedyRoot');

  if (document) {
    document.querySelector('body').appendChild(el);

    ReactDom.render(<Chat />, el);
  }
}

init();
