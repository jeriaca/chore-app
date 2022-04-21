import { useNavigate } from "react-router-dom";
import './App.css';

export const Home = () => {

	const nav = useNavigate();
    return (
        <>
					<div className="homePage">
						<h1>Welcome!</h1> 
						<h2>How are you feeling today?</h2>
						<button 
							className="good"
							onClick={() => 	nav("/Main")}
						>
							Good
						</button>
						<button 
							className="okay"
							onClick={() => 	nav("/Main")}
						>
							Okay
						</button>
						<button
							className="meh" 
							onClick={() => 	nav("/Gentle")}
						>
							Meh.
						</button>
					</div>
				</>
    );
};