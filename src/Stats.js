import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Stats = ({tasks}) => {
  
	const nav = useNavigate();

	const countOfCompletedTasks = tasks.filter(x => x.completed).length;
	const countOfActiveTasks = tasks.length; // Probably not what you want ? ? ?

  return(

		<>
			<h2>Stats</h2>
			Completed Tasks: {countOfCompletedTasks}
			<br />
			Tasks in Progress: {countOfActiveTasks}
			<br />
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
