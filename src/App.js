/* global, $APP */
import React from 'react';
import { BrowserRouter} from "react-router-dom";
import Components from "./components";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import AppContext from './AppContext';

const theme = createTheme({
    palette: {
      primary: { 
        main: '#70A487', // '#2980b9' 
        contrastText: '#fff',
      },
      secondary: { 
        main: '#2B304A', // '#f39c12' 
        contrastText: '#fff',
      },
    },
    layout: {
      SIDEBAR_WIDTH: 250,
      HEADER_HEIGHT: 60,
      INFO_BAR: 40,
    },
  });

function App() {
    const [state, _setState] = React.useState({
        documentTitle: '',
        navSection: null,
        initialisingApp: false
      });
      const setState = s => _setState(prev => ({
        ...prev,
        ...(typeof s === 'function' ? s(prev) : s),
      }));
    
    return (
        <AppContext.Provider value={{ state, setState}}>
        <MuiThemeProvider theme={theme}>
        <BrowserRouter>
       < Components />
       </BrowserRouter>
        </MuiThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
