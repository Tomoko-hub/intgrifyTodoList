import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function App() {

  const [ taskList, setTaskList ] = useState([]);

  return (
      <div className='container-fluid'>
          <Header />
          <InputForm taskList={taskList} setTaskList={setTaskList} />
          <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
