import { Button } from "@mui/material";

export const Create = ({addTask}) => { 
	
	const addMyTask = () => {
		addTask("dummy"); 
	};
	return(
		<>
			<h2>Create New List</h2>
			<Button
				onClick = {addMyTask}
			>
				Add Dummy Task
			</Button>
		</>
	);
};
