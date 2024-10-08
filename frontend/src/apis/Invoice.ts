import axios from "axios";
import type { FormValue } from "../types/invoice";

axios.defaults.baseURL = "/api";

export const getInvoice = async (filter: string) => {
	try {
		const response = await axios({
			method: "get",
			url: "/invoices",
			params: { filter },
		});
		return response.data;
	} catch (error) {
		console.error("Error:", error); // Handle any errors
		return [];
	}
};

export const getInvoiceDetail = async (id: string) => {
	try {
		const response = await axios({
			method: "get",
			url: `/invoices/${id}`,
		});
		return response.data;
	} catch (error) {
		console.error("Error:", error); // Handle any errors
		return undefined;
	}
};

export const createInvoice = async (data: FormValue) => {
	try {
		const response = await axios({
			method: "post",
			url: "/invoices",
			data,
		});
		return response.data;
	} catch (error) {
		console.error("Error:", error); // Handle any errors
	}
};

export const updateInvoice = async (id: string, data: FormValue) => {
	try {
		const response = await axios({
			method: "put",
			url: `/invoices/${id}`,
			data,
		});
		return response.data;
	} catch (error) {
		console.error("Error:", error); // Handle any errors
	}
};

export const deleteInvoice = async (id: string) => {
	try {
		const response = await axios({
			method: "delete",
			url: `/invoices/${id}`,
		});
		return response.data;
	} catch (error) {
		console.error("Error:", error); // Handle any errors
	}
};
