import { useEffect } from "react";
import { Field, FieldProps, FormikValues, ErrorMessage } from "formik";

import { Grid2, OutlinedInput, Typography, SvgIcon, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { Item } from "../../types/invoice";

interface Props {
	item: Item;
	index: number;
	remove: () => void;
	setValue: FormikValues["setFieldValue"];
}

const ItemInput = ({ item, index, remove, setValue }: Props) => {
	useEffect(() => {
		setValue(`items.${index}.total`, item.price * item.quantity);
	}, [item.price, item.quantity, index, setValue]);

	return (
		<Grid2 container justifyContent="space-between" alignItems="center">
			<Grid2 size={4}>
				<Field name={`items.${index}.name`}>
					{({ field }: FieldProps) => (
						<Box>
							<OutlinedInput fullWidth {...field} />
							<ErrorMessage
								name={`items.${index}.name`}
								render={(msg) => (
									<Typography variant="body2">
										{msg}
									</Typography>
								)}
							/>
						</Box>
					)}
				</Field>
			</Grid2>
			<Grid2 size={2}>
				<Field name={`items.${index}.quantity`}>
					{({ field }: FieldProps) => (
						<Box>
							<OutlinedInput fullWidth {...field} />
							<ErrorMessage
								name={`items.${index}.quantity`}
								render={(msg) => (
									<Typography variant="body2">
										{msg}
									</Typography>
								)}
							/>
						</Box>
					)}
				</Field>
			</Grid2>
			<Grid2 size={2}>
				<Field name={`items.${index}.price`}>
					{({ field }: FieldProps) => (
						<Box>
							<OutlinedInput fullWidth {...field} />
							<ErrorMessage
								name={`items.${index}.price`}
								render={(msg) => (
									<Typography variant="body2">
										{msg}
									</Typography>
								)}
							/>
						</Box>
					)}
				</Field>
			</Grid2>
			<Grid2 size={2}>
				<Typography variant="h4">{item.total}</Typography>
			</Grid2>
			<Grid2 size={1}>
				<SvgIcon component={DeleteIcon} onClick={remove} />
			</Grid2>
		</Grid2>
	);
};

export default ItemInput;
