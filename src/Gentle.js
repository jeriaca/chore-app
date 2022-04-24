import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Gentle = () => {
	const nav = useNavigate();

	return(
		<>
			<div className="Gentle">
				<h2>Gentle</h2>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => 	nav("/QuickEasy")}
				>
					View Quick and Easy Tasks
				</Button>

				<Button
				variant="contained"
				onClick={() => 	nav("/Main")}
				>
					Main Menu
				</Button>
			</div>
		</>
	);
};
