import { Router } from "express";
import {
	createInvoice,
	getInvoices,
	getInvoiceById,
	updateInvoice,
	deleteInvoice,
} from "../controllers/invoiceController";

const router = Router();

router.post("/invoices", createInvoice);
router.get("/invoices", getInvoices);
router.get("/invoices/:id", getInvoiceById);
router.put("/invoices/:id", updateInvoice);
router.delete("/invoices/:id", deleteInvoice);

export default router;
