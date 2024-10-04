import { ReactElement } from "react";
import { Stack, Typography } from "@mui/material";

interface Props {
	title: string;
	children: ReactElement;
}

const FieldWrapper = ({ title, children }: Props) => {
	return (
		<Stack gap={0.1}>
			<Typography variant="h4">{title}</Typography>
			{children}
		</Stack>
	);
};

export default FieldWrapper;
