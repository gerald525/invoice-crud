import { Sequelize } from "sequelize";

const sequelize = new Sequelize("invoice_db", "postgres", "123123123", {
	host: "127.0.0.1",
	dialect: "postgres",
	logging: console.log
});

export default sequelize;
