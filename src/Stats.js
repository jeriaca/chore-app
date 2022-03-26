import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Stats = ({countOfCompletedTasks, countOfActiveTasks}) => {
  
	const nav = useNavigate();

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
