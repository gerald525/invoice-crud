import { createTheme } from "@mui/material";

import { Color } from "../enums/colors";

export const lightTheme = createTheme({
	typography: {
		fontFamily: "Spartan",
		h1: {
			fontSize: "32px",
			lineHeight: "36px",
			color: Color.BLACK,
			fontWeight: 600,
		},
		h2: {
			fontSize: "20px",
			lineHeight: "22px",
			color: Color.BLACK,
			fontWeight: 600,
		},
		h3: {
			fontSize: "16px",
			lineHeight: "24px",
			color: Color.BLACK,
			fontWeight: 600,
		},
		h4: {
			fontSize: "12px",
			lineHeight: "15px",
			color: Color.DARK,
			fontWeight: 600,
		},
		h5: {
			fontSize: "12px",
			lineHeight: "15px",
			color: Color.PURPLE,
			fontWeight: 600,
		},
		h6: {
			fontSize: "12px",
			lineHeight: "15px",
			color: Color.GRAY,
			fontWeight: 600,
		},
		body2: {
			fontSize: "12px",
			lineHeight: "15px",
			paddingTop: "3px",
			color: Color.RED,
			fontWeight: 600,
		}
	},
	palette: {
		mode: "light",
		primary: {
			main: "#7C5DFA", // Primary color
		},
		secondary: {
			main: Color.GRAY, // Secondary color
		},
		background: {
			default: Color.LIGHT,
			paper: Color.WHITE,
		},
		text: {
			primary: "#000000",
			secondary: "#F8F8FB",
			disabled: "#888EB0",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				containedInfo: {
					width: "fit-content",
					height: "46px",
					borderRadius: "23px",
					textTransform: "none",
					fontSize: "12px",
					padding: "10px 20px 20px 10px",
				},
				root: {
					width: "150px",
					height: "46px",
					borderRadius: "23px",
					textTransform: "none",
					fontSize: "12px",
					padding: "10px",
				},
				text: {
					color: Color.LIGHT,
				},
				textPrimary: {
					color: "white",
					backgroundColor: Color.PURPLE,
				},
				textError: {
					color: "white",
					backgroundColor: Color.RED,
				},
				textSecondary: {
					color: Color.BLACK,
					backgroundColor: Color.LIGHT,
				},
				textInfo: {
					color: Color.BLACK,
					backgroundColor: Color.LIGHT,
				},
				textWarning: {
					color: Color.DARK,
					backgroundColor: Color.LIGHT,
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: { borderColor: "#DFE3FA" },
			},
		},
		MuiSelect: {
			styleOverrides: {},
			defaultProps: {
				// Set default props for the select component
				variant: "outlined",
				MenuProps: {
					PaperProps: {
						style: {
							maxHeight: 48 * 4.5 + 8,
							backgroundColor: Color.WHITE, // Background color for the dropdown menu
							color: Color.BLACK, // Text color in the dropdown
						},
					},
				},
			},
		},
		MuiDrawer: {
			styleOverrides: {
				root: {
					zIndex: 1,
				},
				paper: {
					// Styles for the Drawer panel (the part that contains the content)
					position: "relative",
					backgroundColor: Color.LIGHT, // Background color for the drawer
					backgroundImage: "none",
					width: "600px", // Width of the drawer
					borderTopRightRadius: "10px",
					borderBottomRightRadius: "10px",
					padding: "50px 0px 100px 100px",
					overflowY: "auto",
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				input: {
					padding: "12px",
					fontSize: "13px",
					backgroundColor: Color.WHITE,
					border: "none",
				},
			},
		},
		MuiTable: {
			styleOverrides: {
				root: {
					padding: "0px",
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					borderBottom: "none",
				},
			},
		},
		MuiTableBody: {
			styleOverrides: {
				root: {
					"& .MuiTableCell-root": {
						fontWeight: 700,
					},
				},
			},
		},
	},
});

export const darkTheme = createTheme({
	typography: {
		fontFamily: "Spartan",
		h1: {
			fontSize: "32px",
			lineHeight: "36px",
			color: Color.WHITE,
			fontWeight: 600,
		},
		h2: {
			fontSize: "20px",
			lineHeight: "22px",
			color: Color.WHITE,
			fontWeight: 600,
		},
		h3: {
			fontSize: "16px",
			lineHeight: "24px",
			color: Color.WHITE,
			fontWeight: 600,
		},
		h4: {
			fontSize: "12px",
			lineHeight: "15px",
			color: Color.LIGHT,
			fontWeight: 600,
		},
		h5: {
			fontSize: "12px",
			lineHeight: "15px",
			color: Color.PURPLE_LIGHT,
			fontWeight: 600,
		},
		h6: {
			fontSize: "12px",
			lineHeight: "15px",
			color: Color.GRAY,
			fontWeight: 600,
		},
		body2: {
			fontSize: "12px",
			lineHeight: "15px",
			paddingTop: "3px",
			color: Color.RED,
			fontWeight: 600,
		}
	},
	palette: {
		mode: "dark",
		primary: {
			main: "#7C5DFA", // Primary color
		},
		secondary: {
			main: "#000000", // Secondary color
		},
		background: {
			default: Color.BLACK,
			paper: Color.DARK,
		},
		text: {
			primary: "#FFFFFF",
			secondary: "#F8F8FB",
			disabled: "#888EB0",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				containedInfo: {
					width: "fit-content",
					height: "46px",
					borderRadius: "23px",
					textTransform: "none",
					fontSize: "12px",
					padding: "10px 20px 20px 10px",
				},
				root: {
					width: "150px",
					height: "46px",
					borderRadius: "23px",
					textTransform: "none",
					fontSize: "12px",
					padding: "10px",
				},
				text: {
					color: Color.LIGHT,
				},
				textPrimary: {
					color: "white",
					backgroundColor: Color.PURPLE,
				},
				textError: {
					color: "white",
					backgroundColor: Color.RED,
				},
				textSecondary: {
					color: "white",
					backgroundColor: Color.DARK_LIGHT,
				},
				textInfo: {
					color: "white",
					backgroundColor: Color.DARK,
				},
				textWarning: {
					color: Color.DARK,
					backgroundColor: Color.LIGHT,
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: "#DFE3FA",
				},
			},
		},
		MuiSelect: {
			styleOverrides: {},
			defaultProps: {
				// Set default props for the select component
				variant: "outlined",
				MenuProps: {
					PaperProps: {
						style: {
							maxHeight: 48 * 4.5 + 8,
							backgroundColor: "#252945", // Background color for the dropdown menu
							color: "#F8F8FB", // Text color in the dropdown
						},
					},
				},
			},
		},
		MuiDrawer: {
			styleOverrides: {
				root: {
					zIndex: 1,
				},
				paper: {
					// Styles for the Drawer panel (the part that contains the content)
					position: "relative",
					backgroundColor: Color.BLACK, // Background color for the drawer
					backgroundImage: "none",
					width: "600px", // Width of the drawer
					borderTopRightRadius: "10px",
					borderBottomRightRadius: "10px",
					padding: "50px 0px 100px 100px",
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				input: {
					padding: "12px",
					fontSize: "13px",
					backgroundColor: Color.DARK_LIGHT,
					borderColor: Color.DARK_LIGHT,
				},
			},
		},
		MuiTable: {
			styleOverrides: {
				root: {
					padding: "0px",
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					borderBottom: "none",
				},
			},
		},
		MuiTableBody: {
			styleOverrides: {
				root: {
					"& .MuiTableCell-root": {
						fontWeight: 700,
					},
				},
			},
		},
	},
});
