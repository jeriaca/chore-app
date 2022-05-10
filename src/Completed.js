import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell"; 
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";

import ContentCopy from "@mui/icons-material/ContentCopy";

export const Completed = ({
	tasks,
	duplicateTask
}) => {
  
	const nav = useNavigate();

	const countOfCompletedTasks = tasks.filter(x => x.completed).length;
	const countOfActiveTasks = tasks.filter(x => x.completed !== true).length; 

	const taskDuplication = (taskToDuplicate) => {
		duplicateTask(taskToDuplicate);
		console.log(taskToDuplicate)
	};

  return(
		<>
			<div className="stats">
				<h1>Completed Tasks</h1>
				<Table
					id="stats-table"
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
									Add To Active Tasks
								</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className="Table-Data">
							{tasks.filter(x => x.completed).map(x => 
						<TableRow key={x.task}>
							<TableCell align="center">{x.difficulty}</TableCell>
							<TableCell align="center">{x.task}</TableCell>
							<TableCell align="center">{x.room}</TableCell>
							<TableCell align="center">
								<ContentCopy
									color="info"
									fontSize="medium"
									onClick={() => taskDuplication(x)} 
								/> 
							</TableCell>
						</TableRow>
							)
						}
					</TableBody>
				</Table>
				<Button
					variant="contained"
					onClick={() => nav("/Tasks")}
				>
					View Current Tasks
				</Button>
				<Button
					variant="contained"
					onClick={() => nav("/Main")}
				>
					Back to Main Menu
				</Button>
				<h2>Your Stats</h2>
				<p>Completed Tasks<span>*</span>: {countOfCompletedTasks}</p>
				<p>Active Tasks: {countOfActiveTasks}</p>
				<p id="note-this">*does not include tasks you've duplicated</p>
			</div>
		</>
	);
};
