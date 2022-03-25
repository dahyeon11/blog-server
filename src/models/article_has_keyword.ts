import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { article, articleId } from './article';
import type { keyword, keywordId } from './keyword';

export interface article_has_keywordAttributes {
  article_id: number;
  keyword_id: number;
}

export type article_has_keywordPk = "article_id" | "keyword_id";
export type article_has_keywordId = article_has_keyword[article_has_keywordPk];
export type article_has_keywordCreationAttributes = article_has_keywordAttributes;

export class article_has_keyword extends Model<article_has_keywordAttributes, article_has_keywordCreationAttributes> implements article_has_keywordAttributes {
  article_id!: number;
  keyword_id!: number;

  // article_has_keyword belongsTo article via article_id
  article!: article;
  getArticle!: Sequelize.BelongsToGetAssociationMixin<article>;
  setArticle!: Sequelize.BelongsToSetAssociationMixin<article, articleId>;
  createArticle!: Sequelize.BelongsToCreateAssociationMixin<article>;
  // article_has_keyword belongsTo keyword via keyword_id
  keyword!: keyword;
  getKeyword!: Sequelize.BelongsToGetAssociationMixin<keyword>;
  setKeyword!: Sequelize.BelongsToSetAssociationMixin<keyword, keywordId>;
  createKeyword!: Sequelize.BelongsToCreateAssociationMixin<keyword>;

  static initModel(sequelize: Sequelize.Sequelize): typeof article_has_keyword {
    return article_has_keyword.init({
    article_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'article',
        key: 'id'
      }
    },
    keyword_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'keyword',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'article_has_keyword',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "keyword_id" },
          { name: "article_id" },
        ]
      },
      {
        name: "article_has_keyword_article_id_idx",
        using: "BTREE",
        fields: [
          { name: "article_id" },
        ]
      },
      {
        name: "article_has_keyword_keyword_id_idx",
        using: "BTREE",
        fields: [
          { name: "keyword_id" },
        ]
      },
    ]
  });
  }
}
