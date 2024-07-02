import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>To-Do List App</h1>
        <TaskInput />   
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
