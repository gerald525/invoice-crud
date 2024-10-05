import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import { Stack, Grid2, Button, Typography, useTheme } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import StatusBadge from "../../components/StatusBadge";
import type { Invoice } from "../../types/invoice";

interface Props {
	invoice: Invoice;
	handleEdit: () => void;
	handleDelete: () => void;
	handlePayment: () => void;
}

const DetailHeader = ({
	invoice,
	handleEdit,
	handleDelete,
	handlePayment,
}: Props) => {
	const theme = useTheme();
	const naviage = useNavigate();

	return (
		<Stack gap={3}>
			<Grid2 container justifyContent="flex-start">
				<Grid2
					container
					gap={1}
					alignItems="center"
					sx={{ cursor: "pointer" }}
					onClick={() => {
						naviage("/");
					}}
				>
					<KeyboardArrowLeftIcon
						fontSize="large"
						sx={{
							marginRight: "10px",
							color: theme.palette.primary.main,
						}}
					/>
					<Typography variant="h4">Go Back</Typography>
				</Grid2>
			</Grid2>
			<StyledGrid sx={{ backgroundColor: theme.palette.background.paper }}>
				<Grid2
					container
					justifyContent="space-between"
					alignItems="center"
					gap={1}
				>
					<Typography variant="h4">Status</Typography>
					<StatusBadge status={invoice.status} />
				</Grid2>
				<Grid2 container gap={1}>
					<Button color="secondary" onClick={handleEdit}>
						Edit
					</Button>
					<Button color="error" onClick={handleDelete}>
						Delete
					</Button>
					<Button color="primary" onClick={handlePayment}>
						Mark as Paid
					</Button>
				</Grid2>
			</StyledGrid>
		</Stack>
	);
};

const StyledGrid = styled(Grid2)`
	padding: 30px;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default DetailHeader;
