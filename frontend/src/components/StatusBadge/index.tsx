import { Box, Grid2, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { ThemeColors } from "../../constants/colors";
import type { Status } from "../../enums/status";

type Props = {
	status: Status;
};

const StatusBadge = ({ status }: Props) => {
	return (
		<Box
			sx={{
				...ThemeColors[status],
				padding: "10px",
				width: "80px",
				borderRadius: "5px",
			}}
		>
			<Grid2 container alignItems="center" justifyContent="center">
				<FiberManualRecordIcon
					sx={{
						color: ThemeColors[status].color,
						marginRight: "10px",
						fontSize: "10px",
					}}
				/>
				<Typography variant="h4" sx={{color: ThemeColors[status].color,}}>
					{status.charAt(0).toUpperCase() + status.slice(1)}
				</Typography>
			</Grid2>
		</Box>
	);
};

export default StatusBadge;
