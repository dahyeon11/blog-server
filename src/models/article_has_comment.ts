import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { article, articleId } from './article';
import type { comment, commentId } from './comment';

export interface article_has_commentAttributes {
  article_id: number;
  comment_id: number;
}

export type article_has_commentPk = "article_id" | "comment_id";
export type article_has_commentId = article_has_comment[article_has_commentPk];
export type article_has_commentCreationAttributes = article_has_commentAttributes;

export class article_has_comment extends Model<article_has_commentAttributes, article_has_commentCreationAttributes> implements article_has_commentAttributes {
  article_id!: number;
  comment_id!: number;

  // article_has_comment belongsTo article via article_id
  article!: article;
  getArticle!: Sequelize.BelongsToGetAssociationMixin<article>;
  setArticle!: Sequelize.BelongsToSetAssociationMixin<article, articleId>;
  createArticle!: Sequelize.BelongsToCreateAssociationMixin<article>;
  // article_has_comment belongsTo comment via comment_id
  comment!: comment;
  getComment!: Sequelize.BelongsToGetAssociationMixin<comment>;
  setComment!: Sequelize.BelongsToSetAssociationMixin<comment, commentId>;
  createComment!: Sequelize.BelongsToCreateAssociationMixin<comment>;

  static initModel(sequelize: Sequelize.Sequelize): typeof article_has_comment {
    return article_has_comment.init({
    article_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'article',
        key: 'id'
      }
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'comment',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'article_has_comment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "article_id" },
          { name: "comment_id" },
        ]
      },
      {
        name: "article_has_comment_article_id_idx",
        using: "BTREE",
        fields: [
          { name: "article_id" },
        ]
      },
      {
        name: "article_has_comment_comment_id_idx",
        using: "BTREE",
        fields: [
          { name: "comment_id" },
        ]
      },
    ]
  });
  }
}
