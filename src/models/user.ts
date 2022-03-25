import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { article, articleId } from './article';
import type { token, tokenId } from './token';

export interface userAttributes {
  id: number;
  name?: string;
  email?: string;
  password?: string;
  nickname?: string;
  profile_image?: string;
  role?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type userPk = "id";
export type userId = user[userPk];
export type userOptionalAttributes = "id" | "name" | "email" | "password" | "nickname" | "profile_image" | "role" | "createdAt" | "updatedAt";
export type userCreationAttributes = Optional<userAttributes, userOptionalAttributes>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  id!: number;
  name?: string;
  email?: string;
  password?: string;
  nickname?: string;
  profile_image?: string;
  role?: number;
  createdAt?: Date;
  updatedAt?: Date;

  // user hasMany article via user_id
  articles!: article[];
  getArticles!: Sequelize.HasManyGetAssociationsMixin<article>;
  setArticles!: Sequelize.HasManySetAssociationsMixin<article, articleId>;
  addArticle!: Sequelize.HasManyAddAssociationMixin<article, articleId>;
  addArticles!: Sequelize.HasManyAddAssociationsMixin<article, articleId>;
  createArticle!: Sequelize.HasManyCreateAssociationMixin<article>;
  removeArticle!: Sequelize.HasManyRemoveAssociationMixin<article, articleId>;
  removeArticles!: Sequelize.HasManyRemoveAssociationsMixin<article, articleId>;
  hasArticle!: Sequelize.HasManyHasAssociationMixin<article, articleId>;
  hasArticles!: Sequelize.HasManyHasAssociationsMixin<article, articleId>;
  countArticles!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany token via user_id
  tokens!: token[];
  getTokens!: Sequelize.HasManyGetAssociationsMixin<token>;
  setTokens!: Sequelize.HasManySetAssociationsMixin<token, tokenId>;
  addToken!: Sequelize.HasManyAddAssociationMixin<token, tokenId>;
  addTokens!: Sequelize.HasManyAddAssociationsMixin<token, tokenId>;
  createToken!: Sequelize.HasManyCreateAssociationMixin<token>;
  removeToken!: Sequelize.HasManyRemoveAssociationMixin<token, tokenId>;
  removeTokens!: Sequelize.HasManyRemoveAssociationsMixin<token, tokenId>;
  hasToken!: Sequelize.HasManyHasAssociationMixin<token, tokenId>;
  hasTokens!: Sequelize.HasManyHasAssociationsMixin<token, tokenId>;
  countTokens!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof user {
    return user.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    profile_image: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    role: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    hasTrigger: true,
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
    ]
  });
  }
}
