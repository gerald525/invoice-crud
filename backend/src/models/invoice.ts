import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

export class Invoice extends Model {
  public id!: string;
  public createdAt!: string;
  public paymentDue!: string;
  public description!: string;
  public paymentTerms!: number;
  public clientName!: string;
  public clientEmail!: string;
  public status!: string;
  public total!: number;
  public senderAddress!: object;
  public clientAddress!: object;
  public items!: object[];
}

Invoice.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentDue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentTerms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    senderAddress: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    clientAddress: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    items: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Invoice',
    tableName: 'invoices',
    timestamps: false,
  }
);

export default Invoice;