import { ErrorMessage, Field, FieldProps } from "formik";
import { Stack, Grid2, Typography, OutlinedInput, Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

import FieldWrapper from "../FieldWrapper";

const BillTo = () => {
	return (
		<Stack gap={2}>
			<Typography variant="h5">Bill To</Typography>
			<FieldWrapper title="Client's Name">
				<Field name="clientName">
					{({ field }: FieldProps) => (
						<Box>
							<OutlinedInput fullWidth {...field} />
							<ErrorMessage
								name="clientName"
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
			<FieldWrapper title="Client's Email">
				<Field name="clientEmail">
					{({ field }: FieldProps) => (
						<Box>
							<OutlinedInput fullWidth {...field} />
							<ErrorMessage
								name="clientEmail"
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
			<FieldWrapper title="Street Address">
				<Field name="clientAddress.street">
					{({ field }: FieldProps) => (
						<Box>
							<OutlinedInput fullWidth {...field} />
							<ErrorMessage
								name="clientAddress.street"
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
						<Field name="clientAddress.city">
							{({ field }: FieldProps) => (
								<Box>
									<OutlinedInput fullWidth {...field} />
									<ErrorMessage
										name="clientAddress.city"
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
						<Field name="clientAddress.postCode">
							{({ field }: FieldProps) => (
								<Box>
									<OutlinedInput fullWidth {...field} />
									<ErrorMessage
										name="clientAddress.postCode"
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
						<Field name="clientAddress.country">
							{({ field }: FieldProps) => (
								<Box>
									<OutlinedInput fullWidth {...field} />
									<ErrorMessage
										name="clientAddress.country"
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
			<Grid2 container justifyContent="space-between" gap={1}>
				<Grid2 size={5.5}>
					<FieldWrapper title="Issue Date">
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<Field name="paymentDue">
								{({ field, form }: FieldProps) => (
									<Box>
										<DatePicker
											sx={{ width: "100%" }}
											value={
												field.value
													? dayjs(field.value)
													: null
											}
											onChange={(
												newValue: Dayjs | null
											) => {
												form.setFieldValue(
													field.name,
													newValue
														? newValue.format(
																"YYYY-MM-DD"
														  )
														: null
												); // Format the value as needed
											}}
											// renderInput={(params) => <TextField {...params} />}
										/>
										<ErrorMessage
											name="paymentDue"
											render={(msg) => (
												<Typography variant="body2">
													{msg}
												</Typography>
											)}
										/>
									</Box>
								)}
							</Field>
						</LocalizationProvider>
					</FieldWrapper>
				</Grid2>
				<Grid2 size={5.5}>
					<FieldWrapper title="Payment Terms">
						<Field name="paymentTerms">
							{({ field }: FieldProps) => (
								<Box>
									<OutlinedInput fullWidth {...field} />
									<ErrorMessage
										name="paymentTerms"
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
			<FieldWrapper title="Project Description">
				<Field name="description">
					{({ field }: FieldProps) => (
						<Box>
							<OutlinedInput fullWidth {...field} />
							<ErrorMessage
								name="description"
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
		</Stack>
	);
};

export default BillTo;
