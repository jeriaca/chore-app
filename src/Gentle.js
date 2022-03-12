import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Gentle = () => {
	const nav = useNavigate();

	return(
		<>
			<h2>Gentle</h2>
			<Button
				onClick={() => 	nav("/QuickEasy")}
			>
				View Quick and Easy Tasks
			</Button>

			<Button
			onClick={() => 	nav("/Main")}
			>
				Main Menu
			</Button>
		</>
	);
};
