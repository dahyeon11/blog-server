import type { Sequelize } from "sequelize";
import { article as _article } from "./article";
import type { articleAttributes, articleCreationAttributes } from "./article";
import { article_has_comment as _article_has_comment } from "./article_has_comment";
import type { article_has_commentAttributes, article_has_commentCreationAttributes } from "./article_has_comment";
import { article_has_keyword as _article_has_keyword } from "./article_has_keyword";
import type { article_has_keywordAttributes, article_has_keywordCreationAttributes } from "./article_has_keyword";
import { category as _category } from "./category";
import type { categoryAttributes, categoryCreationAttributes } from "./category";
import { comment as _comment } from "./comment";
import type { commentAttributes, commentCreationAttributes } from "./comment";
import { keyword as _keyword } from "./keyword";
import type { keywordAttributes, keywordCreationAttributes } from "./keyword";
import { token as _token } from "./token";
import type { tokenAttributes, tokenCreationAttributes } from "./token";
import { user as _user } from "./user";
import type { userAttributes, userCreationAttributes } from "./user";
import { visitor as _visitor } from "./visitor";
import type { visitorAttributes, visitorCreationAttributes } from "./visitor";

export {
  _article as article,
  _article_has_comment as article_has_comment,
  _article_has_keyword as article_has_keyword,
  _category as category,
  _comment as comment,
  _keyword as keyword,
  _token as token,
  _user as user,
  _visitor as visitor,
};

export type {
  articleAttributes,
  articleCreationAttributes,
  article_has_commentAttributes,
  article_has_commentCreationAttributes,
  article_has_keywordAttributes,
  article_has_keywordCreationAttributes,
  categoryAttributes,
  categoryCreationAttributes,
  commentAttributes,
  commentCreationAttributes,
  keywordAttributes,
  keywordCreationAttributes,
  tokenAttributes,
  tokenCreationAttributes,
  userAttributes,
  userCreationAttributes,
  visitorAttributes,
  visitorCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const article = _article.initModel(sequelize);
  const article_has_comment = _article_has_comment.initModel(sequelize);
  const article_has_keyword = _article_has_keyword.initModel(sequelize);
  const category = _category.initModel(sequelize);
  const comment = _comment.initModel(sequelize);
  const keyword = _keyword.initModel(sequelize);
  const token = _token.initModel(sequelize);
  const user = _user.initModel(sequelize);
  const visitor = _visitor.initModel(sequelize);

  article.belongsToMany(comment, { as: 'comment_id_comments', through: article_has_comment, foreignKey: "article_id", otherKey: "comment_id" });
  article.belongsToMany(keyword, { as: 'keyword_id_keywords', through: article_has_keyword, foreignKey: "article_id", otherKey: "keyword_id" });
  comment.belongsToMany(article, { as: 'article_id_articles', through: article_has_comment, foreignKey: "comment_id", otherKey: "article_id" });
  keyword.belongsToMany(article, { as: 'article_id_article_article_has_keywords', through: article_has_keyword, foreignKey: "keyword_id", otherKey: "article_id" });
  article_has_comment.belongsTo(article, { as: "article", foreignKey: "article_id"});
  article.hasMany(article_has_comment, { as: "article_has_comments", foreignKey: "article_id"});
  article_has_keyword.belongsTo(article, { as: "article", foreignKey: "article_id"});
  article.hasMany(article_has_keyword, { as: "article_has_keywords", foreignKey: "article_id"});
  visitor.belongsTo(article, { as: "article", foreignKey: "article_id"});
  article.hasMany(visitor, { as: "visitors", foreignKey: "article_id"});
  article.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(article, { as: "articles", foreignKey: "category_id"});
  category.belongsTo(category, { as: "mother_category_category", foreignKey: "mother_category"});
  category.hasMany(category, { as: "categories", foreignKey: "mother_category"});
  article_has_comment.belongsTo(comment, { as: "comment", foreignKey: "comment_id"});
  comment.hasMany(article_has_comment, { as: "article_has_comments", foreignKey: "comment_id"});
  article_has_keyword.belongsTo(keyword, { as: "keyword", foreignKey: "keyword_id"});
  keyword.hasMany(article_has_keyword, { as: "article_has_keywords", foreignKey: "keyword_id"});
  article.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(article, { as: "articles", foreignKey: "user_id"});
  token.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(token, { as: "tokens", foreignKey: "user_id"});

  return {
    article: article,
    article_has_comment: article_has_comment,
    article_has_keyword: article_has_keyword,
    category: category,
    comment: comment,
    keyword: keyword,
    token: token,
    user: user,
    visitor: visitor,
  };
}
