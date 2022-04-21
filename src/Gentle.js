import { button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Gentle = () => {
	const nav = useNavigate();

	return(
		<>
			<div className="Gentle">
				<h2>Gentle</h2>
				<button
					onClick={() => 	nav("/QuickEasy")}
				>
					View Quick and Easy Tasks
				</button>

				<button
				onClick={() => 	nav("/Main")}
				>
					Main Menu
				</button>
			</div>
		</>
	);
};
