import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Add = ({addTask}) => { 
	const [newTask, setNewTask] = useState([])

	const addMyTask = () => {
		addTask(newTask); 
	};

	const nav = useNavigate();

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

			<Button
					color="success"
					variant="contained"
					onClick={() => nav("/View")}
				>
					View Task List
				</Button>
			</div>
		</>
	);
};
