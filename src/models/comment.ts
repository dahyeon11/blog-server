import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { article, articleId } from './article';
import type { article_has_comment, article_has_commentId } from './article_has_comment';

export interface commentAttributes {
  id: number;
  user_id?: number;
  guest_name?: string;
  guest_password?: string;
  content?: string;
  image?: string;
  createdAt?: Date;
  updateAt?: Date;
}

export type commentPk = "id";
export type commentId = comment[commentPk];
export type commentOptionalAttributes = "id" | "user_id" | "guest_name" | "guest_password" | "content" | "image" | "createdAt" | "updateAt";
export type commentCreationAttributes = Optional<commentAttributes, commentOptionalAttributes>;

export class comment extends Model<commentAttributes, commentCreationAttributes> implements commentAttributes {
  id!: number;
  user_id?: number;
  guest_name?: string;
  guest_password?: string;
  content?: string;
  image?: string;
  createdAt?: Date;
  updateAt?: Date;

  // comment belongsToMany article via comment_id and article_id
  article_id_articles!: article[];
  getArticle_id_articles!: Sequelize.BelongsToManyGetAssociationsMixin<article>;
  setArticle_id_articles!: Sequelize.BelongsToManySetAssociationsMixin<article, articleId>;
  addArticle_id_article!: Sequelize.BelongsToManyAddAssociationMixin<article, articleId>;
  addArticle_id_articles!: Sequelize.BelongsToManyAddAssociationsMixin<article, articleId>;
  createArticle_id_article!: Sequelize.BelongsToManyCreateAssociationMixin<article>;
  removeArticle_id_article!: Sequelize.BelongsToManyRemoveAssociationMixin<article, articleId>;
  removeArticle_id_articles!: Sequelize.BelongsToManyRemoveAssociationsMixin<article, articleId>;
  hasArticle_id_article!: Sequelize.BelongsToManyHasAssociationMixin<article, articleId>;
  hasArticle_id_articles!: Sequelize.BelongsToManyHasAssociationsMixin<article, articleId>;
  countArticle_id_articles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // comment hasMany article_has_comment via comment_id
  article_has_comments!: article_has_comment[];
  getArticle_has_comments!: Sequelize.HasManyGetAssociationsMixin<article_has_comment>;
  setArticle_has_comments!: Sequelize.HasManySetAssociationsMixin<article_has_comment, article_has_commentId>;
  addArticle_has_comment!: Sequelize.HasManyAddAssociationMixin<article_has_comment, article_has_commentId>;
  addArticle_has_comments!: Sequelize.HasManyAddAssociationsMixin<article_has_comment, article_has_commentId>;
  createArticle_has_comment!: Sequelize.HasManyCreateAssociationMixin<article_has_comment>;
  removeArticle_has_comment!: Sequelize.HasManyRemoveAssociationMixin<article_has_comment, article_has_commentId>;
  removeArticle_has_comments!: Sequelize.HasManyRemoveAssociationsMixin<article_has_comment, article_has_commentId>;
  hasArticle_has_comment!: Sequelize.HasManyHasAssociationMixin<article_has_comment, article_has_commentId>;
  hasArticle_has_comments!: Sequelize.HasManyHasAssociationsMixin<article_has_comment, article_has_commentId>;
  countArticle_has_comments!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof comment {
    return comment.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    guest_name: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    guest_password: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    updateAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'comment',
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
