import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/css/index.css';
import App from './App';

import { ThemeConfig } from './theme/theme.config';

import { Provider } from 'react-redux';
import {pomodoroStore} from './stores/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeConfig>
      <Provider store={pomodoroStore}>
        <App />
      </Provider>

    </ThemeConfig>
  </React.StrictMode>
);

