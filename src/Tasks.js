import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
        <ul>
        {tasks.map(x => <h3>{x}</h3>)}

        </ul>
        
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
