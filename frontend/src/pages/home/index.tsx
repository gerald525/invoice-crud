import { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
	Box,
	Button,
	Container,
	Grid2,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	Stack,
	Typography,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import Nav from "../../components/Nav";
import InvoiceItem from "../../components/InvoiceItem";
import InvoiceDrawer from "../../components/InvoiceDrawer";

import type { Invoice } from "../../types/invoice";
import { getInvoice, createInvoice } from "../../apis/Invoice";
import { filterOptions } from "../../constants/data";

function getStyles(option: string, filterOption: string, theme: Theme) {
	return {
		fontWeight:
			filterOption === option
				? theme.typography.fontWeightMedium
				: theme.typography.fontWeightRegular,
	};
}

const HomePage = () => {
	const [invoices, setInvoices] = useState<Invoice[]>([]);
	const [filterOption, setFilterOption] = useState<string>("");
	const [openCreateDrawer, setOpenCreateDrawer] = useState<boolean>(false);
	const [selected, select] = useState<Invoice | undefined>(undefined);

	const theme = useTheme();

	const getData = useCallback(async () => {
		const data = await getInvoice(filterOption);
		setInvoices(data);
	}, [filterOption]);

	useEffect(() => {
		getData();
	}, [getData]);

	const handleChange = (event: SelectChangeEvent<typeof filterOption>) => {
		setFilterOption(
			event.target.value === filterOption ? "" : event.target.value
		);
	};

	return (
		<Box
			sx={{
				backgroundColor: theme.palette.background.default,
				height: "100vh",
			}}
		>
			<Grid2 container sx={{ height: "100%" }}>
				<Nav />
				<InvoiceDrawer
					item={selected}
					open={openCreateDrawer}
					submit={createInvoice}
					handleClose={() => setOpenCreateDrawer(false)}
					getData={getData}
				/>
				<ScrollContainer maxWidth="md" sx={{ height: "100%" }}>
					<Stack>
						<Grid2
							container
							sx={{ paddingTop: "100px", paddingBottom: "20px" }}
							justifyContent="space-between"
							alignItems="center"
						>
							<Stack>
								<Typography variant="h1">Invoices</Typography>
								<Typography
									variant="h4"
									sx={{
										fontSize: "14px",
										paddingTop: "10px",
									}}
								>
									There are 7 total invoices
								</Typography>
							</Stack>
							<Grid2 container gap={1}>
								<Select
									displayEmpty
									sx={{ width: "200px" }}
									value={filterOption}
									onChange={handleChange}
									input={<OutlinedInput />}
									renderValue={(selected) => {
										if (!selected)
											return <em>Filter by nothing</em>;
										return selected;
									}}
									inputProps={{
										"aria-label": "Without label",
									}}
								>
									<MenuItem value="">
										<em>Filter by nothing</em>
									</MenuItem>
									{filterOptions.map((name) => (
										<MenuItem
											key={name.value}
											value={name.value}
											style={getStyles(
												name.value,
												filterOption,
												theme
											)}
										>
											Filter by {name.title}
										</MenuItem>
									))}
								</Select>
								<Button
									variant="contained"
									onClick={() => setOpenCreateDrawer(true)}
									sx={{ paddingLeft: "10px" }}
								>
									<AddCircleIcon
										fontSize="large"
										sx={{ marginRight: "10px" }}
									/>
									New Invoice
								</Button>
							</Grid2>
						</Grid2>
						{invoices.map((item) => (
							<InvoiceItem
								item={item}
								key={item.id}
								select={select}
							/>
						))}
					</Stack>
				</ScrollContainer>
			</Grid2>
		</Box>
	);
};

const ScrollContainer = styled(Container)`
	overflow-y: auto;
	&::-webkit-scrollbar: {
		width: 8px;
	}
	&::-webkit-scrollbar-track: {
		backgroundcolor: #f1f1f1;
	}
	&::-webkit-scrollbar-thumb: {
		backgroundcolor: #888;
		borderradius: 10px;
	}
	&::-webkit-scrollbar-thumb:hover: {
		backgroundcolor: #555;
	}
`;

// const WhiteText = styled(Box)`
// 	color: #ffffff
// `;
// const GrayText = styled(Box)`
// 	color: #ffffff
// `;

export default HomePage;
