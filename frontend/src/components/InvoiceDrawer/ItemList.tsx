import { FieldArray, useFormikContext, ErrorMessage } from "formik";
import { Stack, Grid2, Typography, Button } from "@mui/material";

import ItemInput from "./ItemInput";
import type { FormValue } from "../../types/invoice";

const ItemList = () => {
	const { values, setFieldValue } = useFormikContext<FormValue>();

	return (
		<FieldArray name="items">
			{({ remove, push }) => (
				<Stack gap={1}>
					<Typography variant="h3" color="text.disabled">
						Item List
					</Typography>
					<Grid2 container justifyContent="space-between">
						<Grid2 size={4}>
							<Typography variant="h4">Item Name</Typography>
						</Grid2>
						<Grid2 size={2}>
							<Typography variant="h4">Qty.</Typography>
						</Grid2>
						<Grid2 size={2}>
							<Typography variant="h4">Price</Typography>
						</Grid2>
						<Grid2 size={2}>
							<Typography variant="h4">Total</Typography>
						</Grid2>
						<Grid2 size={1}></Grid2>
					</Grid2>
					{values.items.map((item, key) => (
						<ItemInput
							item={item}
							key={key}
							index={key}
							remove={() => remove(key)}
							setValue={setFieldValue}
						/>
					))}
					<ErrorMessage
						name="items"
						render={(msg) => (
							<Typography variant="body2">{msg}</Typography>
						)}
					/>
					<Button
						sx={{ width: "100%" }}
						color="secondary"
						onClick={() =>
							push({
								name: "",
								quantity: 0,
								price: 0,
								total: 0,
							})
						}
					>
						+ Add New Item
					</Button>
				</Stack>
			)}
		</FieldArray>
	);
};

export default ItemList;
