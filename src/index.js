import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import MyForm from './MyForm';

const styles = {
  fontFamily: 'sans-serif',
  // textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="SodeCandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <MyForm />
  </div>
);

render(<App />, document.getElementById('root'));
