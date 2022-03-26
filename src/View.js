import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

  export const View = ({tasks}) => {
    console.log(tasks);

		const nav = useNavigate();
		
    return (
      <>
        <h2>View and Edit Tasks</h2>

        {tasks.map(x => <h3>{x}</h3>)}
        
				<Button
					color="success"
					variant="contained"
					onClick={() => nav("/Add")}
				>
					Add new tasks
				</Button>

      </>

      );
  };