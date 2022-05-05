import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneOutline from "@mui/icons-material/DoneOutline";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { MenuItem, Table, TableBody, TableCell, TableRow } from "@mui/material";
import TableHead from "@mui/material/TableHead";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';


export const Tasks = ({
	tasks, 
	addNewTask,
	completeTask,
	deleteTask
}) => { 

	console.log(tasks);

	const nav = useNavigate();

  //State of typing and select areas
	const [newTaskEnteredByUser, setNewTaskEnteredByUser] = useState("");
	const [newRoomEnteredByUser, setNewRoomEnteredByUser] = useState("");
	const [newDifficultyEnteredByUser, setNewDifficultyEnteredByUser] = useState("")


	//Set State for Deletion Confirmation
	const [open, setOpen] = useState(false);

	const submitNewTask = () => {
			addNewTask({
				task: newTaskEnteredByUser,
				room: newRoomEnteredByUser,
				completed: false,
				difficulty: newDifficultyEnteredByUser
			})
			clearFields();
	};

	//clear form fields on reset or submit
	const clearFields = () => {
		setNewTaskEnteredByUser("");
		setNewRoomEnteredByUser("");
		setNewDifficultyEnteredByUser("");
	}

	const markTaskComplete = (taskToComplete) => {
		completeTask(taskToComplete);
	};

	//Delete Task//
	//
	//Handles modal behavior
	const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
		setOpen(false);
  };

	//function for task deletion
	const taskDeletion = (taskToDelete) => {
		deleteTask(taskToDelete)
		setOpen(false);
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
									fontSize: 'large', 
									fontWeight: 'bold',
									fontFamily: 'sans-serif'
							}}>Difficulty</TableCell>
							<TableCell
							align="center"
							sx={{
								fontSize: 'large', 
								fontWeight: 'bold',
								fontFamily: 'sans-serif'
								}}>Task</TableCell>
							<TableCell
							align="center"
							sx={{
								fontSize: 'large', 
								fontWeight: 'bold',
								fontFamily: 'sans-serif'
								}}>Room</TableCell>
							<TableCell
							align="center"
							sx={{
								fontSize: 'large', 
								fontWeight: 'bold',
								fontFamily: 'sans-serif'
								}}>Done</TableCell>
							<TableCell
							align="center"
							sx={{
								fontSize: 'large', 
								fontWeight: 'bold',
								fontFamily: 'sans-serif'
								}}>Edit</TableCell>
							<TableCell
							align="center"
							sx={{
								fontSize: 'large', 
								fontWeight: 'bold',
								fontFamily: 'sans-serif'
								}}>Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody 
						className="Table-Data"
					>
							{tasks.filter(x => !x.completed).map(x => 
						<TableRow
							key={x.task}
						>
							<TableCell align="center">{x.difficulty}</TableCell>
							<TableCell align="center">{x.task}</TableCell>
							<TableCell align="center">{x.room}</TableCell>
						
							<TableCell 							
								align="center"
							>
								<DoneOutline 
									className="icon"	
									onClick={() => markTaskComplete(x)}
								/>
							</TableCell>
							<TableCell
								align="center"
							>
								<ModeEditIcon
								className="icon"
							/>
							</TableCell>
							<TableCell
								align="center"
							>
								<DeleteIcon 
								className="icon" 
								onClick={handleClickOpen}
							/>
								<Dialog
									open={open}
									onClose={handleClose}
									aria-labelledby="alert-dialog-title"
									aria-describedby="alert-dialog-description"
								>
									<DialogTitle id="alert-dialog-title">
										{"Permanently delete this task?"}
									</DialogTitle>
									<DialogActions>
										<Button onClick={handleClose}>Do not delete</Button>
										<Button onClick={() => taskDeletion(x)} autoFocus>
											Delete
										</Button>
									</DialogActions>
								</Dialog>
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
		
				<h1>Add New Task</h1>
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
						<MenuItem value={1}>1: Easy AF</MenuItem>
						<MenuItem value={2}>2: Easy Enough</MenuItem>
						<MenuItem value={3}>3: Tolerable</MenuItem>
						<MenuItem value={4}>4: Meh</MenuItem>
						<MenuItem value={5}>5: Kinda Sucks</MenuItem>
						<MenuItem value={6}>6: Uggghhhh</MenuItem>
						<MenuItem value={7}>7: Hate It</MenuItem>
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
