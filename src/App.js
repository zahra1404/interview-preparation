import React from "react";
import Layout from "./components/Layout";
import Box from "@mui/material/Box";
import InterviewHeading from "./components/InterviewHeading";

const App = () => {
	return (
		<>
			<Box sx={{ m: "-8px" }}>
				<Layout>
					<InterviewHeading />
				</Layout>
			</Box>
		</>
	);
};

export default App;
