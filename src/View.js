import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

  export const View = ({taskList}) => {
    
    console.log(taskList);

		const nav = useNavigate();

    return (
      <>
        <h1>Tasks</h1>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Room</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
          {/*   {tasklist.map(x => 
                <tr>{x.task}</tr>
              )
            }
            {tasklist.map(x => 
                <tr>{x.room}</tr>
              )
            }
            {tasklist.map(x => 
                <tr>{x.difficulty}</tr>
              )
            } */}
          </tbody>
        </table>
       

				<Button
					color="success"
					variant="contained"
					onClick={() => nav("/Tasks")}
				>
					Add Tasks
				</Button>

      </>

      );
  };