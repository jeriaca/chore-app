import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Add = ({addTask}) => { 
	
	const addMyTask = () => {
		addTask(); 
	};

	const nav = useNavigate();

	
	return(
		<>

			<h2>Add New Task</h2>
			<form onSubmit={addMyTask}>
				<textarea
					placeholder="task"
					onChange={(e) => e.target.value}
				/>
				<button type="submit">SUBMIT</button>
			</form>

			<h2>Add Dummy Task</h2>
			<Button
				variant="contained"
				onClick={addMyTask}
			>
				Add Dummy Task
			</Button>
			<Button
					color="success"
					variant="contained"
					onClick={() => nav("/View")}
				>
					View Task List
				</Button>

		</>
	);
};
