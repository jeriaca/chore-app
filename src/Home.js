import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {

	const nav = useNavigate();
    return (
        <>
					<h2>Welcome!</h2> 
					<h3>How are you feeling today?</h3>
					<Button 
						color="success" 
						variant="contained" 
						onClick={() => 	nav("/Main")}
					>
						Good
					</Button>
					<Button 
						variant="contained"
						onClick={() => 	nav("/Main")}
					>
						Okay
					</Button>
					<Button 
						color="secondary" 
						variant="contained"
						onClick={() => 	nav("/Gentle")}
					>
						Not so good
					</Button>
        </>
    );
};