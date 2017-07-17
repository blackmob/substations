import * as React from 'react';

import App from './App';
import { Provider } from 'react-redux';
import store from '../store';

export default function Root(props : any) {
  return (
     <Provider store={store}>
         <App/>
    </Provider>
  );
}