import styled from "@emotion/styled";
import {
	Modal,
	Stack,
	Grid2,
	Button,
	Typography,
	useTheme,
} from "@mui/material";

interface Props {
	open: boolean;
	handleClose: () => void;
	handleDelete: () => void;
}

const DeleteModal = ({ open, handleClose, handleDelete }: Props) => {
	const theme = useTheme();

	return (
		<Modal open={open} onClose={handleClose}>
			<StyledBody
				gap={4}
				sx={{ backgroundColor: theme.palette.background.paper }}
			>
				<Typography variant="h2">Confirm Deletion</Typography>
				<Typography variant="h4" width={350}>
					Are you sure you want to delete invoice {}? This action
					cannot be undone.
				</Typography>
				<Grid2 container justifyContent="flex-end" gap={2}>
					<Button color="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button color="error" onClick={handleDelete}>
						Delete
					</Button>
				</Grid2>
			</StyledBody>
		</Modal>
	);
};

const StyledBody = styled(Stack)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 350;
	padding: 30px;
	border-radius: 10px;
	boxshadow: 24;
	p: 4;
`;

export default DeleteModal;
