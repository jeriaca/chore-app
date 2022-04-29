import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneOutline from "@mui/icons-material/DoneOutline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { MenuItem, Table, TableBody, TableCell, TableRow } from "@mui/material";
import TableHead from "@mui/material/TableHead";

export const Tasks = ({
	tasks, 
	addNewTask
}) => { 

	console.log(tasks);

	const nav = useNavigate();

  //State of typing and select areas
	const [newTaskEnteredByUser, setNewTaskEnteredByUser] = useState("");
	const [newRoomEnteredByUser, setNewRoomEnteredByUser] = useState("");
	const [newDifficultyEnteredByUser, setNewDifficultyEnteredByUser] = useState("")

	const submitNewTask = () => {
		addNewTask({
			task: newTaskEnteredByUser,
			room: newRoomEnteredByUser,
			completed: false,
			difficulty: newDifficultyEnteredByUser
		}); 
	};

	return(
		<>
			<div className="Tasks">
				<h1>Current Tasks</h1>
				<Table
					sx={{
						width: "75%"
					}}
				>
					<TableHead
					
					>
						<TableRow
								
						>
							<TableCell 
								sx={{
									fontSize: 'large', 
									fontWeight: 'bold',
									fontFamily: 'Poppins'
									}}
							>Difficulty</TableCell>
							<TableCell>Task</TableCell>
							<TableCell>Room</TableCell>
							<TableCell>Done</TableCell>
							<TableCell>Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody 
						className="Table-Data"
					>
							{tasks.map(x => 
						<TableRow
							key={x.task}
						>
								<TableCell>{x.difficulty}</TableCell>
								<TableCell>{x.task}</TableCell>
								<TableCell>{x.room}</TableCell>
								<TableCell>
									<DoneOutline 
										className="icon"	
										onClick={() => alert("hello")}
									/>
								</TableCell>
								<TableCell>
									<DeleteIcon 
									className="icon" 
									onClick={() => alert("goodbye")}
								/>
								</TableCell>
						</TableRow>
							)
						}
					</TableBody>
					
				</Table>
					
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
						variant="contained"
						size="large"
						onClick={submitNewTask}
						sx={{
							borderRadius: 4,
							fontSize: 20,
							fontWeight: 'bold',
							fontFamily: 'Poppins'
						}}
					>
					Add task
					</Button>
				</FormControl>
       
			 {/*  <Button
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
        </Button> */}
			</div>
		</>
	);
};
