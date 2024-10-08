import { Box, Avatar, Divider, Grid2, SvgIcon } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import styled from "@emotion/styled";

import { useTheme as useThemeContext } from "../../contexts/themeContext";
import userAvatar from "../../assets/image-avatar.jpg";
import { Color } from "../../enums/colors";

import Logo from "./Logo";

const Nav = () => {
	const { mode, toggleMode } = useThemeContext();

	return (
		<StyledBox
			sx={{
				backgroundColor: Color.DARK,
				zIndex: 2,
			}}
		>
			<Grid2
				container
				direction="column"
				justifyContent="space-between"
				sx={{ height: "100%" }}
			>
				<Grid2>
					<Logo />
				</Grid2>
				<Grid2 container direction="column" alignItems="center">
					<SvgIcon
						component={
							mode === "dark" ? LightModeIcon : DarkModeIcon
						}
						sx={{ color: "#fff" }}
						onClick={() => toggleMode()}
					/>
					<Divider sx={{ width: "100%", mt: 2 }} />
					<Avatar
						alt="user"
						src={userAvatar}
						sx={{ margin: "20px" }}
					/>
				</Grid2>
			</Grid2>
		</StyledBox>
	);
};

const StyledBox = styled(Box)`
	height: 100vh;
	width: 80px;
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
	overflow: hidden;
	border: none;
`;

export default Nav;
