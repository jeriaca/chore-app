import { Button } from "@mui/material";

export const Add = ({addTask}) => { 
	
	const addMyTask = () => {
		addTask("dummy"); 
	};
	return(
		<>
			<h2>Add New Task</h2>
			<Button
				onClick = {addMyTask}
			>
				Add Dummy Task
			</Button>
		</>
	);
};
