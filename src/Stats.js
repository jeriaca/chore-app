import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Stats = ({tasks}) => {
  
	const nav = useNavigate();

	const countOfCompletedTasks = tasks.filter(x => x.completed).length;
	const countOfActiveTasks = tasks.filter(x => x.completed !== true).length; 

  return(

		<>
			<h1>Stats</h1>
			<h3>Completed Tasks: {countOfCompletedTasks}</h3>
			<h3>Tasks in Progress: {countOfActiveTasks}</h3>
			<br />

			<Button
				variant="contained"
				onClick={() => nav("/Main")}
			>
				Back to Main Menu
			</Button>

		</>
	);
};
