import React from "react";

//mui-components
import Box from "@mui/material/Box";

//component
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<Box>
			<Navbar />
			{children}
			<Footer />
		</Box>
	);
};

export default Layout;
