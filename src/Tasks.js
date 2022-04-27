import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneOutline from "@mui/icons-material/DoneOutline";

export const Tasks = ({
	tasks, 
	addNewTask
}) => { 

	console.log(tasks);

	const nav = useNavigate();

  //State of typing area
	const [newTaskEnteredByUser, setNewTaskEnteredByUser] = useState([]);

	const submitNewTask = () => {
		addNewTask(newTaskEnteredByUser.map(x => ({
			...x
		})));

	};

	return(
		<>
			<div className="Tasks">
				<h1>Current Tasks</h1>
				<table>
					<thead className="Table-Heading">
						<tr>
							<th scope="col">Task</th>
							<th scope="col">Room</th>
							<th scope="col">Done</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>
					<tbody className="Table-Data">
						{tasks.map(x => 
								<tr>
									<td>{x.task}</td>
									<td>{x.room}</td>
									<td><DoneOutline className="icon"	/></td>
									<td><DeleteIcon className="icon" /></td>
								</tr>
							)
						}
					</tbody>
				</table>
					
				<h1>Add New Task</h1>
				<form 
					id="taskForm"
					onSubmit={submitNewTask}
				>
					<label for="task">Task</label>
					<textarea
						name="task"
						id="new-task"
						placeholder="enter task"
						value={newTaskEnteredByUser}
						onChange={e => setNewTaskEnteredByUser(e.target.value)}
					/>
				<label for="room">Room</label>
					<select 
						name="room"
						value=""
					>
						<option value="">--Please select a room--</option>
						<option value="living room">Living Room</option>
						<option value="kitchen">Kitchen</option>
						<option value="bathroom">Bathroom</option>
						<option value="bedroom">Bedroom</option>
						<option value="general">General</option>
						<option value="other">Other</option>
					</select>
					
					{/*<label for="difficulty">Choose Difficulty</label>
					<select name="difficulty">
						<option value="1">Easy AF</option>
						<option value="2">Easy Enough</option>
						<option value="3">Tolerable</option>
						<option value="4">Meh</option>
						<option value="5">Kinda Sucks</option>
						<option value="6">Uggghhhh</option>
						<option value="7">Hate It</option>
					</select>
					<label for="estimatedTime">Estimated Time to Complete (minutes)</label>
					<input type="number"></input> */}
					<Button 
						type="submit"
						variant="contained"
						color="secondary"
					>
							Add task
					</Button>
				</form>
       
			  <Button
          variant="contained"
          onClick={() => nav("/Stats")}
					color="success"
        >
          Completed Tasks
        </Button>
        <Button
        variant="contained"
	
        onClick={() => nav("/Main")}
        >
          Home
        </Button>
			</div>
		</>
	);
};
