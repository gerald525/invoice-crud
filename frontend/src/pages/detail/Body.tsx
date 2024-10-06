import { Stack, Grid2, Typography, useTheme } from "@mui/material";
import styled from "@emotion/styled";

import ItemTable from "./Table";
import type { Invoice } from "../../types/invoice";

interface Props {
	invoice: Invoice;
}

const DetailBody = ({ invoice }: Props) => {
	const theme = useTheme();

	return (
		<StyledStack gap={5} sx={{ backgroundColor: theme.palette.background.paper }}>
			<Stack>
				<Grid2
					container
					justifyContent="space-between"
					alignItems="flex-start"
				>
					<Stack gap={1}>
						<Typography variant="h3">#{invoice.id}</Typography>
						<Typography variant="h6">
							{invoice.description}
						</Typography>
					</Stack>
					<Stack gap={1} alignItems="flex-end">
						<Typography variant="h6">
							{invoice.senderAddress.street}
						</Typography>
						<Typography variant="h6">
							{invoice.senderAddress.city}
						</Typography>
						<Typography variant="h6">
							{invoice.senderAddress.postCode}
						</Typography>
						<Typography variant="h6">
							{invoice.senderAddress.country}
						</Typography>
					</Stack>
				</Grid2>
				<Grid2 container alignItems="flex-start" gap={10}>
					<Stack gap={6}>
						<Stack gap={1}>
							<Typography variant="h6">Invoice Date</Typography>
							<Typography variant="h3">
								{invoice.createdAt}
							</Typography>
						</Stack>
						<Stack gap={1}>
							<Typography variant="h6">Payment Due</Typography>
							<Typography variant="h3">
								{invoice.paymentDue}
							</Typography>
						</Stack>
					</Stack>
					<Stack gap={1}>
						<Typography variant="h6">Bill To</Typography>
						<Typography variant="h3">
							{invoice.clientName}
						</Typography>
						<Typography variant="h6">
							{invoice.clientAddress.street}
						</Typography>
						<Typography variant="h6">
							{invoice.clientAddress.city}
						</Typography>
						<Typography variant="h6">
							{invoice.clientAddress.postCode}
						</Typography>
						<Typography variant="h6">
							{invoice.clientAddress.country}
						</Typography>
					</Stack>
					<Stack gap={1}>
						<Typography variant="h6">Send to</Typography>
						<Typography variant="h3">
							{invoice.clientEmail}
						</Typography>
					</Stack>
				</Grid2>
			</Stack>
			<ItemTable items={invoice.items} total={invoice.total} />
		</StyledStack>
	);
};

const StyledStack = styled(Stack)`
	padding: 30px;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
`;

export default DetailBody;
