import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Greet } from './components/greet';
import { Welcome } from './components/welcome';
import Message from './components/message';
import Counter from './components/conter';
import ClassClick from './components/classClick';
import FunctionClick from './components/functionClick';
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome name="guru" />
      {/* <Message/> */}
      {/* <Counter/> */}
      <ClassClick/>
      <FunctionClick/>
    </div>
  );
}

export default App;
