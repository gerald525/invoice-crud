import { useState } from "react";
import { Formik, Form } from "formik";
import { joiFormikAdapter } from "joi-formik-adapter";

import { Drawer, Typography, Stack, Grid2, Button } from "@mui/material";
import { Scrollbars } from 'react-custom-scrollbars-2';

import type { Invoice, FormValue } from "../../types/invoice";
import { invoiceSchema } from "../../types/joiSchema";
import { Status } from "../../enums/status";

import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import ItemList from "./ItemList";
import styled from "@emotion/styled";

interface Props {
	item: Invoice | undefined;
	open: boolean;
	submit: (item: FormValue) => Promise<void>;
	handleClose: () => void;
	getData: () => Promise<void>;
}

const InvoiceDrawer = ({ item, open, handleClose, submit, getData }: Props) => {
	const [status, setStatus] = useState(Status.PAID);
	const initialValue: FormValue = {
		senderAddress: item?.senderAddress || {
			street: "",
			country: "",
			city: "",
			postCode: "",
		},
		clientName: item?.clientName || "",
		clientEmail: item?.clientEmail || "",
		clientAddress: item?.clientAddress || {
			street: "",
			country: "",
			city: "",
			postCode: "",
		},
		status: item?.status || Status.PAID,
		paymentDue: item?.paymentDue || "",
		paymentTerms: item?.paymentTerms || 1,
		description: item?.description || "",
		items: item?.items || [],
	};

	const handleSubmit = async (values: FormValue) => {
		values.status = status;
		await submit(values);
		await getData();
		handleClose();
	};

	return (
		<Drawer open={open} onClose={handleClose}>
			<StyledScrollbar>
				<Formik
					initialValues={initialValue}
					validationSchema={joiFormikAdapter(invoiceSchema)}
					onSubmit={handleSubmit}
				>
					<Form>
						<Stack gap={3} sx={{paddingRight: "20px"}}>
							<Typography variant="h2">New Invoice</Typography>
							<BillFrom />
							<BillTo />
							<ItemList />
							<Grid2
								container
								justifyContent="space-between"
								alignItems="center"
								sx={{ paddingBottom: "50px" }}
							>
								<Button
									color="warning"
									sx={{ width: "100px" }}
									onClick={handleClose}
								>
									Discard
								</Button>
								<Grid2
									container
									justifyContent="space-between"
									alignItems="center"
									gap={1}
								>
									<Button
										color="secondary"
										type="submit"
										onClick={() => setStatus(Status.DRAFT)}
									>
										Save as Draft
									</Button>
									<Button
										type="submit"
										onClick={() =>
											setStatus(Status.PENDING)
										}
									>
										Save & Send
									</Button>
								</Grid2>
							</Grid2>
						</Stack>
					</Form>
				</Formik>
			</StyledScrollbar>
		</Drawer>
	);
};

const StyledScrollbar = styled(Scrollbars)`
	
`;

export default InvoiceDrawer;
