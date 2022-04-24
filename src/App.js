import { dividerClasses, Button, Breadcrumbs, Link } from '@mui/material';
import { func } from 'prop-types';
import { Fragment, useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Main } from './Main';
import { Stats } from './Stats';
import { QuickEasy } from './QuickEasy';
import { Gentle } from './Gentle';
import { Tasks } from './Tasks';
import { Sandbox } from './Sandbox';
import { View } from './View';

const task1 = {
  id: 11,
  start: "2022-02-14T15:14:30",
  end: "2022-02-14T15:20:00",
  room: "kitchen",
  task: "clean countertops",
  difficulty: 2,
  complete: true
};
const task2 = {
  id: 22,
  start: "2022-02-14T15:22:30",
  end: "2022-02-14T15:29:00",
  room: "kitchen",
  task: "sweep floor",
  difficulty: 3,
  complete: true
};
const task3 = {
  id: 33,
  start: null,
  end: null,
  room: "kitchen",
  task: "dishes",
  difficulty: null,
  complete: false
};
const task4 = {
  id: 44,
  start: null,
  end: null,
  room: "living room",
  task: "vacuum",
  difficulty: null,
  complete: false
};
const task5 = {
id: 55,
start: "2022-03-03T12:20:00",
end: "2022-03-03T12:23:07",
room: "living room",
task: "quick pickup",
difficulty: 1,
complete: false
};
const task6 = {
id: 66,
start: "2022-02-14T15:30:30",
end: "2022-02-14T15:45:00",
room: "kitchen",
task: "dishes",
difficulty: 3,
complete: true
};


let taskList = [
  task1, task2, task3, task4, task5, task6
];

const activeTasks = taskList.filter(x => x.complete === false);
const completedTasks = taskList.filter(x => x.complete === true);
const countOfCompletedTasks = completedTasks.length;
const countOfActiveTasks = activeTasks.length;

const originalTasks = activeTasks.map(taskItem => taskItem.task);

function App() {
  const [realTasks, setRealTasks] = useState([])
  
  const addTask = (t) => {
    setRealTasks([
      ...realTasks
      , t
    ]);
  };

  console.log("Active Tasks:", activeTasks.length);
  console.log("Completed Tasks:", completedTasks.length);

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="gentle" element={<Gentle />} />
        <Route path="quickeasy" element={<QuickEasy />} />
        <Route path="main" element={<Main />} />
        <Route path="view" element={
          <View 
            taskList={taskList}
          />
        } />
        <Route path="stats" element={
          <Stats 
            countOfCompletedTasks={countOfCompletedTasks}
            countOfActiveTasks={countOfActiveTasks}
          />
        } />
        <Route path="tasks" element={
          <Tasks
            addTask = {addTask} 
            tasks = {realTasks}
            originalTasks = {originalTasks}
          />
        } />
        <Route path="sandbox" element={
          <Sandbox
            addTask = {addTask} 
            tasks = {realTasks}
            originalTasks = {originalTasks}
          />
        } />
      </Routes>
    </div>
  );
};

export default App;
