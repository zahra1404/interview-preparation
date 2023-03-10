import React from "react";

//mui-components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

//data
import interviewHeading from "../data/interviewHeading";

//mui-icons
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const InterviewHeading = () => {
	const text = {
		fontSize: { xs: "20px", sm: "20px", md: "30px" },
		fontWeight: 600,
		fontFamily: "Poppins",
		p: 2,
		"&:hover": {
			color: "#E6DEDD",
		},
	};
	const desc = {
		fontSize: { xs: "15px", sm: "15px", md: "20px" },
		fontFamily: "Poppins",
		p: "0px 16px 16px 40px",
		textAlign: "justify",
	};
	return (
		<Grid container sx={{ justifyContent: "center", m: "0.5cm 0cm" }}>
			{interviewHeading.map((interview, index) => (
				<Grid
					item
					xs={11}
					md={11}
					sx={{
						border: "1px solid #000",
						borderRadius: 5,
						m: "20px 0px",
					}}>
					<a
						href={interview.link}
						style={{ textDecoration: "none", color: "#000" }}>
						<Typography sx={text}>
							<ArrowRightIcon />
							{interview.heading}
						</Typography>
					</a>
					<Typography sx={desc}>{interview.desc}</Typography>
				</Grid>
			))}
		</Grid>
	);
};

export default InterviewHeading;
