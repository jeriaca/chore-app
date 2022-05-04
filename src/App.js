import { useState, useReducer } from 'react';
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

export const ACTIONS = {
  ADD_TASK: 'add-task',
  DELETE_TASK: 'delete-task',
  COMPLETE_TASK: 'complete-task'
}




function App() {

  const reducer = (tasks, action) =>{
    switch (action.type) {
      case ACTIONS.ADD_TASK: {
        return [
          ...tasks, 
          action.task
          /* {
            taskName: action.taskName,
            room: action.room,
            completed: action.completed, 
            difficulty: action.difficulty
          } */
        ];
      }
      case ACTIONS.COMPLETE_TASK: {
        return tasks.map(task => {
          if (task.taskName === action.task.taskName) {
            return action.task;
          } else {
            return task;
          }
        });
      }
      case ACTIONS.DELETE_TASK: {
        return tasks.filter(task => task.taskName !== action.task);
      }
      default : {
        throw Error ('Unknown action: ' + action.type);
      }
    }
  }

  //const [state, setState] = useState([]);

  const [tasks, dispatch] = useReducer(reducer, []);

  const addNewTask = (newTaskToAdd) => {
    dispatch(
      {
        type: ACTIONS.ADD_TASK, 
        task: newTaskToAdd
      }
    );
  }

  const completeTask = (completedTask) => {
    dispatch({
        type: ACTIONS.COMPLETE_TASK,
        task: completedTask
      });
  };

  const deleteTask = (taskToDelete) => {
    dispatch({
      type: ACTIONS.DELETE_TASK,
      task: taskToDelete
    });
  }

  

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="gentle" element={<Gentle />} />
        <Route path="quickeasy" element={<QuickEasy />} />
        <Route path="main" element={<Main />} />
        <Route path="stats" element={<Stats />} />
        <Route path="tasks" element={
          <Tasks
            addNewTask={addNewTask}
            completeTask={completeTask}
            tasks={tasks}
            dispatch={dispatch}
          />
        } />
      </Routes>
    </div>
  );
};

export default App;
