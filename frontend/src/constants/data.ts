import { Status } from "../enums/status";
import type { Invoice } from "../types/invoice";

export const initialDetail: Invoice = {
	id: "",
	createdAt: "",
	paymentDue: "",
	description: "",
	paymentTerms: 1,
	clientName: "",
	clientEmail: "",
	status: Status.PAID,
	senderAddress: {
		street: "",
		city: "",
		postCode: "",
		country: "",
	},
	clientAddress: {
		street: "",
		city: "",
		postCode: "",
		country: "",
	},
	items: [
		{
			name: "",
			quantity: 1,
			price: 1,
			total: 1,
		},
	],
	total: 1,
};

export const filterOptions = [
	{ value: Status.PAID, title: "Paid" },
	{ value: Status.PENDING, title: "Pending" },
	{ value: Status.DRAFT, title: "Draft" },
];
