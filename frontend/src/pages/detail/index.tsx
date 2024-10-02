import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Box, Container, Grid2, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Status } from "../../enums/status";
import {
	deleteInvoice,
	getInvoiceDetail,
	updateInvoice,
} from "../../apis/Invoice";
import type { FormValue, Invoice } from "../../types/invoice";
import { initialDetail } from "../../constants/data";

import Nav from "../../components/Nav";
import DeleteModal from "../../components/DeleteModal";
import InvoiceDrawer from "../../components/InvoiceDrawer";

import DetailHeader from "./Header";
import DetailBody from "./Body";

const DetailPage = () => {
	const [invoice, setInvoice] = useState<Invoice>(initialDetail);
	const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
	const [openEditDrawer, setOpenEditDrawer] = useState<boolean>(false);
	const theme = useTheme();
	const navigate = useNavigate();
	const { id } = useParams();

	const getData = useCallback(async () => {
		if (!id) return navigate("/");
		const data = await getInvoiceDetail(id);
		if (!data) return navigate("/");
		setInvoice(data);
	}, [id, navigate]);

	useEffect(() => {
		getData();
	}, [getData]);

	const handleEdit = async (values: FormValue) => {
		if (!id) return;
		await updateInvoice(id, values);
		setOpenEditDrawer(false);
	};

	const handleDelete = async () => {
		// delete functionality
		if (!id) return;
		await deleteInvoice(id);
		setOpenDeleteModal(false);
		navigate("/");
	};

	const handlePayment = async () => {
		// paid functionality
		if (!id) return;
		await updateInvoice(id, { ...invoice, status: Status.PAID });
		navigate("/");
	};

	return (
		<Box
			sx={{
				backgroundColor: theme.palette.background.default,
				height: "100vh",
			}}
		>
			<Grid2 container>
				<Nav />
				<Container maxWidth="md" sx={{ paddingTop: "100px" }}>
					<Stack gap={5}>
						<DetailHeader
							invoice={invoice}
							handleEdit={() => setOpenEditDrawer(true)}
							handleDelete={() => setOpenDeleteModal(true)}
							handlePayment={handlePayment}
						/>
						<DetailBody invoice={invoice} />
					</Stack>
				</Container>
			</Grid2>
			<DeleteModal
				open={openDeleteModal}
				handleClose={() => setOpenDeleteModal(false)}
				handleDelete={handleDelete}
			/>
			<InvoiceDrawer
				item={invoice}
				open={openEditDrawer}
				submit={handleEdit}
				handleClose={() => setOpenEditDrawer(false)}
				getData={getData}
			/>
		</Box>
	);
};

export default DetailPage;
