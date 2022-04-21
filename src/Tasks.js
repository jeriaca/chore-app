import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneOutline from "@mui/icons-material/DoneOutline";

export const Tasks = ({addTask, tasks, originalTasks}) => { 
  const nav = useNavigate();

  const [newTask, setNewTask] = useState([])

	const addMyTask = () => {
		addTask(newTask); 
	};

	return(
		<>
			<div className="addTask">
			<h2>Add New Task</h2>
			<form onSubmit={addMyTask}>
				<label for="new-task">Task</label>
				<textarea
					id="new-task"
					placeholder="enter task"
					value={newTask}
					onChange={e => setNewTask(e.target.value)}
				/>
				<Button 
					type="submit"
					variant="contained"
				>
						Add task
				</Button>
			</form>

			<h2>Current Tasks:</h2>
      <div className="Task-List">
           {tasks.map(x => 
                <p
                  className="Task-List-Item"
                >
                 {x} <DoneOutline/> <DeleteIcon />
                </p>                
              ) 
            }
           
        </div>
        
				{originalTasks.map(y =><h3>{y}</h3>)}
        
        <Button
          variant="contained"
          onClick={() => nav("/Stats")}
        >
          View Completed Tasks
        </Button>
        <Button
        variant="contained"
        onClick={() => nav("/Main")}
        >
          Back to Main Page
        </Button>
			</div>
		</>
	);
};
