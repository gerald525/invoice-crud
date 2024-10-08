import { Box } from "@mui/material";
import logo from "../../assets/logo.svg";
import styled from "@emotion/styled";

const Logo = () => {
	return (
		<StyledBox>
			<LogoWrapper />
			<StyledImage src={logo} alt="logo" />
		</StyledBox>
	);
};

export default Logo;

const StyledBox = styled(Box)`
	background-color: #7c5dfa;
	width: 100%;
	height: 80px;
	border-bottom-right-radius: 15px;
	overflow: hidden;
`;

const LogoWrapper = styled(Box)`
	position: relative;
	top: 40px;
	height: 40px;
	width: 100%;
	background-color: #9277ff;
	border-top-left-radius: 15px;
`;

const StyledImage = styled.img`
	position: relative;
	top: -14px;
	left: 25px;
	width: 30px;
	height: 28px;
`;
