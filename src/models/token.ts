import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface tokenAttributes {
  id: number;
  user_id: number;
  type?: number;
  value?: string;
  exp?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type tokenPk = "id";
export type tokenId = token[tokenPk];
export type tokenOptionalAttributes = "id" | "type" | "value" | "exp" | "createdAt" | "updatedAt";
export type tokenCreationAttributes = Optional<tokenAttributes, tokenOptionalAttributes>;

export class token extends Model<tokenAttributes, tokenCreationAttributes> implements tokenAttributes {
  id!: number;
  user_id!: number;
  type?: number;
  value?: string;
  exp?: Date;
  createdAt?: Date;
  updatedAt?: Date;

  // token belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof token {
    return token.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    exp: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'token',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "token_user_id_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
