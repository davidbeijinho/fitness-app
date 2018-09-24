import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './components/App';
import store from './store/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#80f480',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
});


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root-fitness-app'),
);
