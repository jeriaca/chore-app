import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";


export const Main = () => {
	const nav = useNavigate();
	return (
		<>
			<h2>Main Menu</h2>
			<Button
				variant="contained"
				onClick={() => 	nav("/Tasks")}
			>
				View and Edit Tasks
			</Button>
			<Button
				variant="contained"
				onClick={() => nav("/Stats")}
			>
				View Stats
			</Button>
			<Button
				variant="contained"
				onClick={() => 	nav("/QuickEasy")}
			>
				Quick and Easy Tasks
			</Button>
		</>
	);
};
