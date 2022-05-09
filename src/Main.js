import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";


export const Main = () => {
	const nav = useNavigate();
	return (
		<>
			<div className="main"> 
				<h1>Main Menu</h1>
				<Button
					variant="contained"
					onClick={() => 	nav("/Tasks")}
				>
					View and Edit Tasks
				</Button>
				<Button
					variant="contained"
					onClick={() => nav("/Completed")}
				>
					View Completed Tasks
				</Button>
				<Button
					variant="contained"
					onClick={() => 	nav("/QuickEasy")}
				>
					Easyish Tasks
				</Button>
			</div>
		</>
	);
};
