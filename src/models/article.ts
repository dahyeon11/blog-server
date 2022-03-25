import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { article_has_comment, article_has_commentId } from './article_has_comment';
import type { article_has_keyword, article_has_keywordId } from './article_has_keyword';
import type { category, categoryId } from './category';
import type { comment, commentId } from './comment';
import type { keyword, keywordId } from './keyword';
import type { user, userId } from './user';
import type { visitor, visitorId } from './visitor';

export interface articleAttributes {
  id: number;
  user_id: number;
  category_id: number;
  title: string;
  content: string;
  thumbnail_image?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type articlePk = "id";
export type articleId = article[articlePk];
export type articleOptionalAttributes = "id" | "thumbnail_image" | "image" | "createdAt" | "updatedAt";
export type articleCreationAttributes = Optional<articleAttributes, articleOptionalAttributes>;

export class article extends Model<articleAttributes, articleCreationAttributes> implements articleAttributes {
  id!: number;
  user_id!: number;
  category_id!: number;
  title!: string;
  content!: string;
  thumbnail_image?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;

  // article hasMany article_has_comment via article_id
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
  // article hasMany article_has_keyword via article_id
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
  // article belongsToMany comment via article_id and comment_id
  comment_id_comments!: comment[];
  getComment_id_comments!: Sequelize.BelongsToManyGetAssociationsMixin<comment>;
  setComment_id_comments!: Sequelize.BelongsToManySetAssociationsMixin<comment, commentId>;
  addComment_id_comment!: Sequelize.BelongsToManyAddAssociationMixin<comment, commentId>;
  addComment_id_comments!: Sequelize.BelongsToManyAddAssociationsMixin<comment, commentId>;
  createComment_id_comment!: Sequelize.BelongsToManyCreateAssociationMixin<comment>;
  removeComment_id_comment!: Sequelize.BelongsToManyRemoveAssociationMixin<comment, commentId>;
  removeComment_id_comments!: Sequelize.BelongsToManyRemoveAssociationsMixin<comment, commentId>;
  hasComment_id_comment!: Sequelize.BelongsToManyHasAssociationMixin<comment, commentId>;
  hasComment_id_comments!: Sequelize.BelongsToManyHasAssociationsMixin<comment, commentId>;
  countComment_id_comments!: Sequelize.BelongsToManyCountAssociationsMixin;
  // article belongsToMany keyword via article_id and keyword_id
  keyword_id_keywords!: keyword[];
  getKeyword_id_keywords!: Sequelize.BelongsToManyGetAssociationsMixin<keyword>;
  setKeyword_id_keywords!: Sequelize.BelongsToManySetAssociationsMixin<keyword, keywordId>;
  addKeyword_id_keyword!: Sequelize.BelongsToManyAddAssociationMixin<keyword, keywordId>;
  addKeyword_id_keywords!: Sequelize.BelongsToManyAddAssociationsMixin<keyword, keywordId>;
  createKeyword_id_keyword!: Sequelize.BelongsToManyCreateAssociationMixin<keyword>;
  removeKeyword_id_keyword!: Sequelize.BelongsToManyRemoveAssociationMixin<keyword, keywordId>;
  removeKeyword_id_keywords!: Sequelize.BelongsToManyRemoveAssociationsMixin<keyword, keywordId>;
  hasKeyword_id_keyword!: Sequelize.BelongsToManyHasAssociationMixin<keyword, keywordId>;
  hasKeyword_id_keywords!: Sequelize.BelongsToManyHasAssociationsMixin<keyword, keywordId>;
  countKeyword_id_keywords!: Sequelize.BelongsToManyCountAssociationsMixin;
  // article hasMany visitor via article_id
  visitors!: visitor[];
  getVisitors!: Sequelize.HasManyGetAssociationsMixin<visitor>;
  setVisitors!: Sequelize.HasManySetAssociationsMixin<visitor, visitorId>;
  addVisitor!: Sequelize.HasManyAddAssociationMixin<visitor, visitorId>;
  addVisitors!: Sequelize.HasManyAddAssociationsMixin<visitor, visitorId>;
  createVisitor!: Sequelize.HasManyCreateAssociationMixin<visitor>;
  removeVisitor!: Sequelize.HasManyRemoveAssociationMixin<visitor, visitorId>;
  removeVisitors!: Sequelize.HasManyRemoveAssociationsMixin<visitor, visitorId>;
  hasVisitor!: Sequelize.HasManyHasAssociationMixin<visitor, visitorId>;
  hasVisitors!: Sequelize.HasManyHasAssociationsMixin<visitor, visitorId>;
  countVisitors!: Sequelize.HasManyCountAssociationsMixin;
  // article belongsTo category via category_id
  category!: category;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<category>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<category, categoryId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<category>;
  // article belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof article {
    return article.init({
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
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    thumbnail_image: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'article',
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
        name: "article_user_id_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "article_category_id_idx",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
  }
}
