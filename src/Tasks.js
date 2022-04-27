import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneOutline from "@mui/icons-material/DoneOutline";
import Tooltip from "@mui/material/Tooltip";

export const Tasks = ({addTask, tasks, originalTasks}) => { 
  const nav = useNavigate();

  const [newTask, setNewTask] = useState([])

	const addMyTask = () => {
		addTask(newTask); 
	};

	console.log(tasks);


	return(
		<>
			<div className="addTask">
				<h1>Current Tasks</h1>
				<div className="Task-List">
						{tasks.map(x => 
								<p
									className="Task-List-Item"
								>
									<div id="left">{x}</div>
								 
									<div id="right">
										<Tooltip 
											title="mark complete" 
											placement="bottom"
										>
											<DoneOutline 
												className="icon"
											/>
										</Tooltip>  
										<Tooltip 
											title="delete"
										>
											<DeleteIcon 
												className="icon" 
											/>
										</Tooltip>
									</div>
								</p>                
							) 
						}

				</div>
				{/* {originalTasks.map(y =><h3>{y}</h3>)} */}
					
				<h1>Add New Task</h1>
				<form 
					id="taskForm"
					onSubmit={addMyTask}
				>
					<textarea
						id="new-task"
						placeholder="enter task"
						value={newTask}
						onChange={e => setNewTask(e.target.value)}
					/>
				{/* 	<label for="room">Select a Room</label>
					<select name="room">
						<option value="living room">Living Room</option>
						<option value="kitchen">Kitchen</option>
						<option value="bathroom">Bathroom</option>
						<option value="bedroom">Bedroom</option>
						<option value="general">General</option>
						<option value="other">Other</option>
					</select>
					<label for="difficulty">Choose Difficulty</label>
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
