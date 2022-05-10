import { useNavigate } from "react-router-dom";

import { useState } from "react";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell"; 
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";

import DoneOutline from "@mui/icons-material/DoneOutline";

export const Tasks = ({
	tasks, 
	addNewTask,
	completeTask,
}) => { 

	const nav = useNavigate();

  //State of typing and select areas
	const [newTaskEnteredByUser, setNewTaskEnteredByUser] = useState("");
	const [newRoomEnteredByUser, setNewRoomEnteredByUser] = useState("");
	const [newDifficultyEnteredByUser, setNewDifficultyEnteredByUser] = useState("");

	//Submit New Task
	const submitNewTask = () => {
			newTaskEnteredByUser === "" ? alert("enter a task") :
			addNewTask({
				key: newTaskEnteredByUser + newRoomEnteredByUser,
				task: newTaskEnteredByUser,
				room: newRoomEnteredByUser,
				completed: false,
				difficulty: newDifficultyEnteredByUser
			})
			clearFields();
	};

	//Clear form fields on reset or submit
	const clearFields = () => {
		setNewTaskEnteredByUser("");
		setNewRoomEnteredByUser("");
		setNewDifficultyEnteredByUser("");
	}

	//Function for task completion
	const markTaskComplete = (taskToComplete) => {
		completeTask(taskToComplete);
	};

	return(
		<>
			<div className="Tasks">
				<h1>Current Tasks</h1>
				<Table
					id="task-table"
				>
					<TableHead>
						<TableRow>
							<TableCell
								align="center"
								sx={{
									fontSize: 'medium', 
									fontWeight: 'bold',
									fontFamily: 'sans-serif'
							}}>
								Difficulty
							</TableCell>
							<TableCell
								align="center"
								sx={{
									fontSize: 'medium', 
									fontWeight: 'bold',
									fontFamily: 'sans-serif'
								}}>
									Task
								</TableCell>
							<TableCell
								align="center"
								sx={{
									fontSize: 'medium', 
									fontWeight: 'bold',
									fontFamily: 'sans-serif'
								}}>
									Room
								</TableCell>
							<TableCell
								align="center"
								sx={{
									fontSize: 'medium', 
									fontWeight: 'bold',
									fontFamily: 'sans-serif'
								}}>
									Complete
								</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className="Table-Data">
							{tasks.filter(x => !x.completed).map(x => 
						<TableRow 
							key={x.key}
						>
							<TableCell align="center">{x.difficulty}</TableCell>
							<TableCell align="center">{x.task}</TableCell>
							<TableCell align="center">{x.room}</TableCell>
							<TableCell align="center">
								<DoneOutline
									color="primary" 
									onClick={() => markTaskComplete(x)}
								/>
							</TableCell>
						</TableRow>
							)
						}
					</TableBody>
				</Table>
				<Button 
					id="tasks-to-home"
					variant="contained"
					onClick={() => nav("/Main")}
				>	
					Home
				</Button>
				<hr />
				<h1 id="add-task-heading">Add New Task</h1>
				<FormControl
					id="taskForm"
				>
					<h3>Task</h3>
					<TextField
						variant="outlined"
						name="task"
						id="new-task"
						placeholder="enter task"
						value={newTaskEnteredByUser}
						onChange={e => setNewTaskEnteredByUser(e.target.value)}
					/>

					<h3>Room</h3>
					<Select 
						value={newRoomEnteredByUser}
						onChange={e => setNewRoomEnteredByUser(e.target.value)}
					>
						<MenuItem value={"living room"}>Living Room</MenuItem>
						<MenuItem value={"kitchen"}>Kitchen</MenuItem>
						<MenuItem value={"bathroom"}>Bathroom</MenuItem>
						<MenuItem value={"bedroom"}>Bedroom</MenuItem>
						<MenuItem value={"general"}>General</MenuItem>
						<MenuItem value={"other"}>Other</MenuItem>
					</Select> 
					
					<h3>Choose Difficulty</h3>
					<Select 
						value={newDifficultyEnteredByUser}
						onChange={e => setNewDifficultyEnteredByUser(e.target.value)}
						sx={{
							mb: 6
						}}
					>
						<MenuItem value={1}>1: Easy</MenuItem>
						<MenuItem value={2}>2: Easy Enough</MenuItem>
						<MenuItem value={3}>3: Tolerable</MenuItem>
						<MenuItem value={4}>4: Meh</MenuItem>
						<MenuItem value={5}>5: Kinda Sucks</MenuItem>
						<MenuItem value={6}>6: Uggghhhh</MenuItem>
						<MenuItem value={7}>7: The Worst</MenuItem>
					</Select>

					<Button 
						id="add-task"
						variant="contained"
						size="large"
						onClick={submitNewTask}
						sx={{
							borderRadius: 4,
							fontSize: 20,
							fontWeight: 'bold',
							mb: 1
						}}
					>
					Add task
					</Button>
					<Button 
						id="clear"
						variant="contained"
						size="large"
						onClick={clearFields}
						sx={{
							borderRadius: 4,
							fontSize: 20,
							fontWeight: 'bold',
							mb: 1,
						}}
					>
					Clear Fields
					</Button>
				</FormControl>
				<br />
			</div>
		</>
	);
};
