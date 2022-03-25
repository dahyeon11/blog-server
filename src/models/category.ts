import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { article, articleId } from './article';

export interface categoryAttributes {
  id: number;
  name: string;
  description: string;
  depth: number;
  mother_category: number;
}

export type categoryPk = "id";
export type categoryId = category[categoryPk];
export type categoryOptionalAttributes = "id";
export type categoryCreationAttributes = Optional<categoryAttributes, categoryOptionalAttributes>;

export class category extends Model<categoryAttributes, categoryCreationAttributes> implements categoryAttributes {
  id!: number;
  name!: string;
  description!: string;
  depth!: number;
  mother_category!: number;

  // category hasMany article via category_id
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
  // category belongsTo category via mother_category
  mother_category_category!: category;
  getMother_category_category!: Sequelize.BelongsToGetAssociationMixin<category>;
  setMother_category_category!: Sequelize.BelongsToSetAssociationMixin<category, categoryId>;
  createMother_category_category!: Sequelize.BelongsToCreateAssociationMixin<category>;

  static initModel(sequelize: Sequelize.Sequelize): typeof category {
    return category.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    depth: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    mother_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'category',
    timestamps: false,
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
        name: "mother_category_id_idx",
        using: "BTREE",
        fields: [
          { name: "mother_category" },
        ]
      },
    ]
  });
  }
}
