import { Request, Response } from "express";

import Invoice from "../models/invoice";
import formatDate from "../utils/formatDate";

export const createInvoice = async (req: Request, res: Response) => {
	try {
		const letters = String.fromCharCode(
			Math.floor(Math.random() * 26) + 65, // Generates a random number between 65-90 (ASCII for A-Z)
			Math.floor(Math.random() * 26) + 65 // Generates another random uppercase letter
		);
		const numbers = Math.floor(1000 + Math.random() * 9000).toString(); // Generates a number between 1000-9999
		const id = `${letters}${numbers}`;
		const total = req.body.items.reduce(
			(cur: number, item: any) => cur + item.price * item.quantity,
			0
		);

		const invoice = await Invoice.create({
			id,
			createdAt: formatDate(new Date()),
			...req.body,
			total,
		});
		res.status(201).json(invoice);
	} catch (error) {
		res.status(500).json({ error: "Something went wrong" });
	}
};

export const getInvoices = async (req: Request, res: Response) => {
	try {
		const { filter } = req.query;
		const options: any = {};
		if (filter) options.where = { status: filter }; // Filter by status if provided

		const invoices = await Invoice.findAll(options);
		res.status(200).json(invoices);
	} catch (error) {
		res.status(500).json({ error: "Something went wrong" });
	}
};

export const getInvoiceById = async (req: Request, res: Response) => {
	try {
		const invoice = await Invoice.findByPk(req.params.id);
		if (invoice) res.status(200).json(invoice);
		else res.status(404).json({ error: "Invoice not found" });
	} catch (error) {
		res.status(500).json({ error: "Something went wrong" });
	}
};

export const updateInvoice = async (req: Request, res: Response) => {
	try {
		const invoice = await Invoice.findByPk(req.params.id);
		if (invoice) {
			await invoice.update(req.body);
			res.status(200).json(invoice);
		} else {
			res.status(404).json({ error: "Invoice not found" });
		}
	} catch (error) {
		res.status(500).json({ error: "Something went wrong" });
	}
};

export const deleteInvoice = async (req: Request, res: Response) => {
	try {
		const invoice = await Invoice.findByPk(req.params.id);
		if (invoice) {
			await invoice.destroy();
			res.status(204).send();
		} else {
			res.status(404).json({ error: "Invoice not found" });
		}
	} catch (error) {
		res.status(500).json({ error: "Something went wrong" });
	}
};
