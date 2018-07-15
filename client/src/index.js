import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import { ThemeProvider } from 'styled-components';
import colors from './styles/_color';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <ThemeProvider theme={ colors }>
            <BrowserRouter>
                <App />
            </BrowserRouter> 
        </ThemeProvider>
        , rootEl
    )
}

if(module.hot) {
    module.hot.accept('./App', () => {
        setTimeout(render);
    })
}
render();

registerServiceWorker();
