import React from "react";

//mui-components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar sx={{ backgroundColor: "#000" }}>
				<img
					src="../../logo.png"
					alt="logo"
					width="80px"
					height="80px"
					style={{ marginTop: "18px" }}
				/>
				<Typography
					sx={{ color: "#E6DEDD", fontWeight: 600, ml: "-10px" }}>
					| &nbsp;INTERVIEW PREP
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
