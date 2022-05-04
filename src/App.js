import { dividerClasses, Button, Breadcrumbs, Link, createTheme } from '@mui/material';
import { func } from 'prop-types';
import { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Main } from './Main';
import { QuickEasy } from './QuickEasy';
import { Gentle } from './Gentle';
import { Tasks } from './Tasks';
import { Stats } from './Stats';
/* const task1 = {
  room: "kitchen",
  task: "clean countertops",
  difficulty: 2,
  complete: true
};
const task2 = {
  room: "kitchen",
  task: "sweep floor",
  difficulty: 3,
  complete: true
};
const task3 = {
  room: "kitchen",
  task: "dishes",
  difficulty: null,
  complete: false
};
const task4 = {
  room: "living room",
  task: "vacuum",
  difficulty: null,
  complete: false
};
const task5 = {
room: "living room",
task: "quick pickup",
difficulty: 1,
complete: false
};
const task6 = {
room: "kitchen",
task: "dishes",
difficulty: 3,
complete: true
};


let hardCodedTaskList = [
  task1, task2, task3, task4, task5, task6
];

const activeHardCodedTasks = hardCodedTaskList.filter(x => x.complete === false);

const completedTasks = hardCodedTaskList.filter(x => x.complete === true);
const countOfCompletedTasks = completedTasks.length;
const countOfActiveTasks = activeHardCodedTasks.length;

const originalTasks = activeHardCodedTasks.map(taskItem => taskItem.task); */



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
    setTasks(tasks.map(x => ({
      ...x 

      // But override completed for the task that has been passed in.
      , completed: x === taskToComplete ? true : x.completed
    })));
  };
  
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="gentle" element={<Gentle />} />
        <Route path="quickeasy" element={<QuickEasy />} />
        <Route path="main" element={<Main />} />
        <Route path="stats" element={
          <Stats 
            tasks={tasks}
          />
        } />
        <Route path="tasks" element={
          <Tasks
            tasks={tasks}
            addNewTask={addNewTask}
            completeTask={completeTask}
          />
        } />
      </Routes>
    </div>
  );
};

export default App;
