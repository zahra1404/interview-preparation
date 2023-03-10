import React from "react";

//mui-components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
	return (
		<Box sx={{ backgroundColor: "#000" }}>
			<Typography
				sx={{
					color: "#fff",
					fontSize: "12px",
					fontWeight: 500,
					fontFamily: "Poppins",
					textAlign: "center",
					p: "20px 0px",
				}}>
				All rights reserved @Zahra Zaidi | Made by Zahra Zaidi
			</Typography>
		</Box>
	);
};

export default Footer;
