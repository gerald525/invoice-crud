import express from "express";
import cors from "cors";
import invoiceRoutes from "./routes/invoiceRoutes";
import sequelize from "./config/database";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", invoiceRoutes);

sequelize
	.sync()
	.then(() => {
		console.log("Database connected");
		app.listen(8000, () => {
			console.log("Server is running on port 8000");
		});
	})
	.catch((err) => console.error("Unable to connect to the database:", err));
