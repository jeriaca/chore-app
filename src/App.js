import { useState, useRef } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Main } from './Main';
import { QuickEasy } from './QuickEasy';
import { Tasks } from './Tasks';
import { Stats } from './Stats';

function App() {

  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTaskToAdd) => {
    console.log(newTaskToAdd)
    setTasks(
      [
        ...tasks, 
        newTaskToAdd
      ]
    );
  };

  const completeTask = (taskToComplete) => {

    // Update the lifted state with all the tasks, again...
    setTasks(
      tasks.map(x => (
        {
          ...x 

          // But override completed for the task that has been passed in.
          , completed: x === taskToComplete ? true : x.completed
        }
      )));
  };

  const deleteTask = (taskToDelete) => {
    console.log(taskToDelete);
    setTasks(
      tasks.filter(tasks => tasks !==  taskToDelete)
    ); 
  };

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path="quickeasy" element={
          <QuickEasy 
            tasks={tasks}
          />} />
        <Route path="main" element={<Main />} />
        <Route path="stats" element={
          <Stats 
            tasks={tasks}
          />} />
        <Route path="tasks" element={
          <Tasks
            tasks={tasks}
            addNewTask={addNewTask}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        } />
      </Routes>
    </div>
  );
};

export default App;
