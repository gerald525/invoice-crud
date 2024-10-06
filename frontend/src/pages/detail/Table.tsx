import { Grid2, Stack, Typography, useTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import styled from "@emotion/styled";

import { Item } from "../../types/invoice";

interface Props {
	items: Item[];
	total: number;
}

const ItemTable = ({ items, total }: Props) => {
	const theme = useTheme();

	return (
		<StyledStack sx={{ backgroundColor: theme.palette.background.default }}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Item Name</TableCell>
						<TableCell align="center">QTY.</TableCell>
						<TableCell align="right">Price</TableCell>
						<TableCell align="right">Total</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{items.map((item) => (
						<TableRow key={item.name}>
							<TableCell component="th" scope="row">
								{item.name}
							</TableCell>
							<TableCell align="center">
								{item.quantity}
							</TableCell>
							<TableCell align="right">£{item.price}</TableCell>
							<TableCell align="right">£{item.total}</TableCell>
						</TableRow>
					))}
				</TableBody>
				<StyledFooter sx={{ backgroundColor: theme.palette.secondary.main }}>
					<TableRow>
						<TableCell colSpan={4}>
							<Grid2
								container
								justifyContent="space-between"
							>
								<Typography variant="h4">Amount Due</Typography>
								<Typography variant="h3">£{total}</Typography>
							</Grid2>
						</TableCell>
					</TableRow>
				</StyledFooter>
			</Table>
		</StyledStack>
	);
};

const StyledStack = styled(Stack)`
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
`;

const StyledFooter = styled(TableFooter)`
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	border-radius: 10px;
`;

export default ItemTable;
