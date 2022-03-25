import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { article, articleId } from './article';
import type { article_has_keyword, article_has_keywordId } from './article_has_keyword';

export interface keywordAttributes {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type keywordPk = "id";
export type keywordId = keyword[keywordPk];
export type keywordOptionalAttributes = "createdAt" | "updatedAt";
export type keywordCreationAttributes = Optional<keywordAttributes, keywordOptionalAttributes>;

export class keyword extends Model<keywordAttributes, keywordCreationAttributes> implements keywordAttributes {
  id!: number;
  name!: string;
  createdAt?: Date;
  updatedAt?: Date;

  // keyword belongsToMany article via keyword_id and article_id
  article_id_article_article_has_keywords!: article[];
  getArticle_id_article_article_has_keywords!: Sequelize.BelongsToManyGetAssociationsMixin<article>;
  setArticle_id_article_article_has_keywords!: Sequelize.BelongsToManySetAssociationsMixin<article, articleId>;
  addArticle_id_article_article_has_keyword!: Sequelize.BelongsToManyAddAssociationMixin<article, articleId>;
  addArticle_id_article_article_has_keywords!: Sequelize.BelongsToManyAddAssociationsMixin<article, articleId>;
  createArticle_id_article_article_has_keyword!: Sequelize.BelongsToManyCreateAssociationMixin<article>;
  removeArticle_id_article_article_has_keyword!: Sequelize.BelongsToManyRemoveAssociationMixin<article, articleId>;
  removeArticle_id_article_article_has_keywords!: Sequelize.BelongsToManyRemoveAssociationsMixin<article, articleId>;
  hasArticle_id_article_article_has_keyword!: Sequelize.BelongsToManyHasAssociationMixin<article, articleId>;
  hasArticle_id_article_article_has_keywords!: Sequelize.BelongsToManyHasAssociationsMixin<article, articleId>;
  countArticle_id_article_article_has_keywords!: Sequelize.BelongsToManyCountAssociationsMixin;
  // keyword hasMany article_has_keyword via keyword_id
  article_has_keywords!: article_has_keyword[];
  getArticle_has_keywords!: Sequelize.HasManyGetAssociationsMixin<article_has_keyword>;
  setArticle_has_keywords!: Sequelize.HasManySetAssociationsMixin<article_has_keyword, article_has_keywordId>;
  addArticle_has_keyword!: Sequelize.HasManyAddAssociationMixin<article_has_keyword, article_has_keywordId>;
  addArticle_has_keywords!: Sequelize.HasManyAddAssociationsMixin<article_has_keyword, article_has_keywordId>;
  createArticle_has_keyword!: Sequelize.HasManyCreateAssociationMixin<article_has_keyword>;
  removeArticle_has_keyword!: Sequelize.HasManyRemoveAssociationMixin<article_has_keyword, article_has_keywordId>;
  removeArticle_has_keywords!: Sequelize.HasManyRemoveAssociationsMixin<article_has_keyword, article_has_keywordId>;
  hasArticle_has_keyword!: Sequelize.HasManyHasAssociationMixin<article_has_keyword, article_has_keywordId>;
  hasArticle_has_keywords!: Sequelize.HasManyHasAssociationsMixin<article_has_keyword, article_has_keywordId>;
  countArticle_has_keywords!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof keyword {
    return keyword.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'keyword',
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
