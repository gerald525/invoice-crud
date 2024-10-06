import { Box, Grid2, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
// import styled from "@emotion/styled";

import StatusBadge from "../StatusBadge";
import type { Invoice } from "../../types/invoice";
import { useNavigate } from "react-router-dom";

type Props = {
	item: Invoice;
	select: (item: Invoice) => void;
};

const InvoiceItem = ({ item, select }: Props) => {
	const theme = useTheme();
	const navigate = useNavigate();

	return (
		<Box
			sx={{
				marginTop: "20px",
				padding: "5px",
				py: "20px",
				height: "40px",
				backgroundColor: theme.palette.background.paper,
				borderRadius: "10px",
			}}
			onClick={() => {
				select(item);
				navigate(`/detail/${item.id}`);
			}}
		>
			<Grid2 container justifyContent="space-around" alignItems="center">
				<Typography variant="h4" width="10%">
					#{item.id}
				</Typography>
				<Typography variant="h6" width="14%">
					Due {item.paymentDue}
				</Typography>
				<Typography variant="h6" width="14%">
					{item.clientName}
				</Typography>
				<Typography variant="h3" width="14%" align="right">
					£{item.total}
				</Typography>
				<StatusBadge status={item.status} />
				<ChevronRightIcon sx={{ color: theme.palette.primary.main }} />
			</Grid2>
		</Box>
	);
};

export default InvoiceItem;
