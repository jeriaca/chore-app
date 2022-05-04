import { Icon, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import './App.css';

export const QuickEasy = ({tasks}) => {

	const nav = useNavigate();

	const easyTasks = tasks.filter(x => x.difficulty < 4);

	return(
		<>
			<div className="easy">
				<h1>Quick and Easy Tasks</h1>
				
				<ul>
					{easyTasks.map(x => 
						<li>{x.task} the {x.room}</li>
					)}
				</ul>

				<h3>Other ideas:</h3>
				<ul>
					<li>Tidy up one corner or surface in the room where you spend most of your time. This could simply mean clearing a side table or putting some clothes in a hamper.</li>
				</ul>
				<Button 
					variant="contained"
					size="large"
					sx={{
						borderRadius: 4,
						fontSize: 20,
						fontWeight: 'bold',
						mb: 1,
					}}
					onClick={() => nav("/Main")}
				>	
					Home
				</Button>
			</div>
		</>
	);
};
