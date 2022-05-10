import { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Main } from './Main';
import { QuickEasy } from './QuickEasy';
import { Completed } from './Completed';
import { Tasks } from './Tasks';


function App() {

  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTaskToAdd) => {
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

  const duplicateTask = (taskToDuplicate) => {
    setTasks(
      tasks.map(x => (
        {
          ...x 
         , completed: x === taskToDuplicate ? false : x.completed
        }
      )));
  };

  const deleteTask = (taskToDelete) => {
    setTasks(
      tasks.filter(tasks => tasks !== taskToDelete)
    ); 
  };

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path="quickeasy" element={
          <QuickEasy 
            tasks={tasks}
            duplicateTask={duplicateTask}
          />} />
        <Route path="main" element={<Main />} />
        <Route path="completed" element={
          <Completed 
            tasks={tasks}
            duplicateTask={duplicateTask}
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
