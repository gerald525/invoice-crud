import { Field, FieldProps, ErrorMessage } from "formik";
import { Stack, Grid2, Box, Typography, OutlinedInput } from "@mui/material";

import FieldWrapper from "../FieldWrapper";

const BillFrom = () => {
	return (
		<Stack gap={2}>
			<Typography variant="h5">Bill From</Typography>
			<FieldWrapper title="Street Address">
				<Field name="senderAddress.street">
					{({ field }: FieldProps) => (
						<Box>
							<OutlinedInput fullWidth {...field} />
							<ErrorMessage
								name="senderAddress.street"
								render={(msg) => (
									<Typography variant="body2">
										{msg}
									</Typography>
								)}
							/>
						</Box>
					)}
				</Field>
			</FieldWrapper>
			<Grid2 container justifyContent="space-between" gap={1}>
				<Grid2 size={3.5}>
					<FieldWrapper title="City">
						<Field name="senderAddress.city">
							{({ field }: FieldProps) => (
								<Box>
									<OutlinedInput fullWidth {...field} />
									<ErrorMessage
										name="senderAddress.city"
										render={(msg) => (
											<Typography variant="body2">
												{msg}
											</Typography>
										)}
									/>
								</Box>
							)}
						</Field>
					</FieldWrapper>
				</Grid2>
				<Grid2 size={3.5}>
					<FieldWrapper title="Post Code">
						<Field name="senderAddress.postCode">
							{({ field }: FieldProps) => (
								<Box>
									<OutlinedInput fullWidth {...field} />
									<ErrorMessage
										name="senderAddress.postCode"
										render={(msg) => (
											<Typography variant="body2">
												{msg}
											</Typography>
										)}
									/>
								</Box>
							)}
						</Field>
					</FieldWrapper>
				</Grid2>
				<Grid2 size={3.5}>
					<FieldWrapper title="Country">
						<Field name="senderAddress.country">
							{({ field }: FieldProps) => (
								<Box>
									<OutlinedInput fullWidth {...field} />
									<ErrorMessage
										name="senderAddress.country"
										render={(msg) => (
											<Typography variant="body2">
												{msg}
											</Typography>
										)}
									/>
								</Box>
							)}
						</Field>
					</FieldWrapper>
				</Grid2>
			</Grid2>
		</Stack>
	);
};

export default BillFrom;
