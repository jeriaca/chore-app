import { dividerClasses, Button } from '@mui/material';
import { func } from 'prop-types';
import { Fragment } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {

  const task1 = {
      start: "2022-02-14T15:14:30",
      end: "2022-02-14T15:20:00",
      room: "kitchen",
      task: "clean countertops",
      complete: true
  };
  const task2 = {
      start: "2022-02-14T15:22:30",
      end: "2022-02-14T15:29:00",
      room: "kitchen",
      task: "sweep floor",
      complete: true
  };
  const task3 = {
      start: "2022-02-14T15:30:30",
      end: "2022-02-14T15:45:00",
      room: "kitchen",
      task: "dishes",
      complete: false
  };
  const task4 = {
      start: "2022-02-14T15:55:30",
      end: "2022-02-14T16:01:00",
      room: "living room",
      task: "vacuum",
      complete: false
  };
  
  let taskList = [
      task1, task2, task3, task4
  ];

  const activeTasks = taskList.filter(x => x.room === "kitchen");
  const completedTasks = taskList.filter(x => x.complete === true);
  const tasks = taskList.map(taskItem => taskItem.task);

  console.log(tasks);

  const Home = () => <h2>Home</h2>;
  const Gentle = () => <h2>Gentle</h2>;
  const QuickTips = () => <h2>Quick Tidy Tips</h2>;
  const Main = () => <h2>Main Menu</h2>;
  const CreateList = () => <h2>Create New List</h2>;
  const ViewEditList = () => <h2>View and Edit Lists</h2>;
  const Stats = () => <h2>Stats</h2>;

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="gentle" element={<Gentle />} />
        <Route path="quick" element={<QuickTips />} />
        <Route path="main" element={<Main />} />
        <Route path="create" element={<CreateList />} />
        <Route path="view" element={<ViewEditList />} />
        <Route path="stats" element={<Stats />} />
      </Routes>
    </div>
  );
};

export default App;
