import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ContentCopy from '@mui/icons-material/ContentCopy';

import './App.css';

export const QuickEasy = ({
		tasks,
		duplicateTask
	}) => {

	const nav = useNavigate();

	const taskDuplication = (taskToDuplicate) => {
		duplicateTask(taskToDuplicate);
		console.log(taskToDuplicate)
	};

	const easyTasks = tasks.filter(x => x.difficulty < 4 && x.completed !== true);
	const easyCompletedTasks = tasks.filter(x => x.difficulty < 4 && x.completed === true);

	return(
		<>
			<div className="easy">
				<h1>Easyish Tasks</h1>
				<h4>Feeling overwhelemed? Don't want to do anything, but you feel the need to do something? Here's some task ideas that suck slightly less than most other things.</h4>
				<h3>Easyish Active Tasks:</h3>
					{easyTasks.map(x => 
						x.room !== "other" && x.room !== "general" ?				
						<p>-{x.task} in {x.room}</p>
						:
						<p>-{x.task}</p>
					)}
		
				<h3>Previously Completed Easyish Tasks:</h3>
				<h4>(click icon to add this task back to your active tasks)</h4>  
					{easyCompletedTasks.map(x => x.room !== "other" && x.room !== "general" ?				
						<p>
							–{x.task} in {x.room} 
								<ContentCopy
									sx= {{
										pl: 2,
									}}
									color="secondary"
									fontSize="small"
									onClick={() => taskDuplication(x)} 
								/> 
							
						</p>  
						:
						<p>
							–{x.task} 
								<ContentCopy
									sx= {{
										pl: 2,
									}}
									color="secondary"
									fontSize="small"
									onClick={() => taskDuplication(x)} 
								/> 
						</p>
					)}
				<h3>Here Are a Few More Ideas:</h3>
				<p>-Tidy up one corner or surface in the room where you spend most of your time. This could simply mean clearing a side table or putting some clothes in a hamper.</p>				
				<p>-Take before and after photos. Not to share, but to see just how much you accomplished.</p>
				<p>-Try the 20/10/20 method: do 20 minutes of work, take a 10 minute break, do 20 minutes more of work, and so on. Heck, swap it out for 10/20/10 if you want. Who's gonna know? </p>
				<p>-If you're not sensitive to scents and you can afford to do so, sometimes buying a cleaning product in a new or pleasant scent is a nice incentive to clean up. Lavender is especially pleasant and supposedly helps with anxiety and depression. (Don't take a huge wiff of anything though. You might anger your sinuses or barf.) </p>
				<hr />
				<h5>
					Don't forget...you are NOT what you've accomplished in a day. Even if you do diddy squat, you are more than likely doing your best.
					And that's good enough. Seriously. It is. Will some dirty dishes in your sink matter in five years? Probably not (as long as you
					do them within the next four years or so).
				</h5>
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
