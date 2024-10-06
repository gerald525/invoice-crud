import Joi from "joi";

export const itemSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 3 characters",
		"any.required": "Name is required",
  }),
  quantity: Joi.number().integer().min(1).required().messages({
		"any.required": "Required",
    "number.base": "Not number",
    "number.min": "At least 1",
  }),
  price: Joi.number().min(0.0000001).required().messages({
		"any.required": "Required",
    "number.base": "Not number",
    "number.min": "Not positive",
  }),
});

export const invoiceSchema = Joi.object({
	senderAddress: Joi.object({
		street: Joi.string().required().messages({
			"string.empty": "Street is required",
			"any.required": "Street is required",
		}),
		city: Joi.string().required().messages({
			"string.empty": "City is required",
			"any.required": "City is required",
		}),
		postCode: Joi.string()
			.pattern(/^[0-9]{5}$/)
			.required()
			.messages({
				"string.empty": "Postcode is required",
				"string.pattern.base": "Postcode must be exactly 5 digits",
				"any.required": "Postcode is required",
			}),
		country: Joi.string().required().messages({
			"string.empty": "Country is required",
			"any.required": "Country is required",
		}),
	}),
	clientAddress: Joi.object({
		street: Joi.string().required().messages({
			"string.empty": "Street is required",
			"any.required": "Street is required",
		}),
		city: Joi.string().required().messages({
			"string.empty": "City is required",
			"any.required": "City is required",
		}),
		postCode: Joi.string()
			.pattern(/^[0-9]{5}$/)
			.required()
			.messages({
				"string.empty": "Postcode is required",
				"string.pattern.base": "Postcode must be exactly 5 digits",
				"any.required": "Postcode is required",
			}),
		country: Joi.string().required().messages({
			"string.empty": "Country is required",
			"any.required": "Country is required",
		}),
	}),
	clientName: Joi.string().required().messages({
		"string.empty": "Client name is required",
		"any.required": "Client name is required",
	}),
	clientEmail: Joi.string()
		.email({ tlds: { allow: false } })
		.required()
		.messages({
			"string.empty": "Client email is required",
			"string.email": "Invalid email format",
			"any.required": "Client email is required",
		}),
	status: Joi.string().required().messages({
		"string.empty": "Status is required",
		"any.required": "Status is required",
	}),
	paymentDue: Joi.string().required().messages({
		"string.empty": "Payment due date is required",
		"any.required": "Payment due date is required",
	}),
	paymentTerms: Joi.number().min(1).required().messages({
		"number.base": "Payment terms must be a number",
		"number.min": "Payment terms must be at least 1",
		"any.required": "Payment terms are required",
	}),
	description: Joi.string().required().messages({
		"string.empty": "Description is required",
		"any.required": "Description is required",
	}),
	items: Joi.array().items(itemSchema).min(1).required().messages({
		"array.min": "At least one item is required",
	}),
});