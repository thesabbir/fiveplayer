import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import routes from './routes';
import './app.css';


render(
    <Router>
      {routes}
    </Router>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  // require('./createDevToolsWindow')(store);
}
