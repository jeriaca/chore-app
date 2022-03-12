import { dividerClasses, Button } from '@mui/material';
import { func } from 'prop-types';
import { Fragment } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Main } from './Main';
import { View } from './View';
import { Stats } from './Stats';
import { Create }  from './Create';
import { QuickEasy } from './QuickEasy';
import { Gentle } from './Gentle';

function App() {

  const task1 = {
      start: "2022-02-14T15:14:30",
      end: "2022-02-14T15:20:00",
      room: "kitchen",
      task: "clean countertops",
      difficulty: 2,
      complete: true
  };
  const task2 = {
      start: "2022-02-14T15:22:30",
      end: "2022-02-14T15:29:00",
      room: "kitchen",
      task: "sweep floor",
      difficulty: 3,
      complete: true
  };
  const task3 = {
      start: null,
      end: null,
      room: "kitchen",
      task: "dishes",
      difficulty: null,
      complete: false
  };
  const task4 = {
      start: null,
      end: null,
      room: "living room",
      task: "vacuum",
      difficulty: null,
      complete: false
  };
  const task5 = {
    start: "2022-03-03T12:20:00",
    end: "2022-03-03T12:23:07",
    room: "living room",
    task: "quick pickup",
    difficulty: 1,
    complete: true
  };
  const task6 = {
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

  const activeTasks = taskList.filter(x => x.room === "kitchen");
  const completedTasks = taskList.filter(x => x.complete === true);
  const tasks = taskList.map(taskItem => taskItem.task);

  console.log(tasks);

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="gentle" element={<Gentle />} />
        <Route path="quickeasy" element={<QuickEasy />} />
        <Route path="main" element={<Main />} />
        <Route path="create" element={<Create />} />
        <Route path="view" element={<View />} />
        <Route path="stats" element={<Stats />} />
      </Routes>
    </div>
  );
};

export default App;
