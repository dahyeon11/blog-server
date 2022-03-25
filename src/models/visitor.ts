import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { article, articleId } from './article';

export interface visitorAttributes {
  id: number;
  article_id?: number;
  timestamp?: Date;
  reference_url?: string;
  ip?: string;
}

export type visitorPk = "id";
export type visitorId = visitor[visitorPk];
export type visitorOptionalAttributes = "id" | "article_id" | "timestamp" | "reference_url" | "ip";
export type visitorCreationAttributes = Optional<visitorAttributes, visitorOptionalAttributes>;

export class visitor extends Model<visitorAttributes, visitorCreationAttributes> implements visitorAttributes {
  id!: number;
  article_id?: number;
  timestamp?: Date;
  reference_url?: string;
  ip?: string;

  // visitor belongsTo article via article_id
  article!: article;
  getArticle!: Sequelize.BelongsToGetAssociationMixin<article>;
  setArticle!: Sequelize.BelongsToSetAssociationMixin<article, articleId>;
  createArticle!: Sequelize.BelongsToCreateAssociationMixin<article>;

  static initModel(sequelize: Sequelize.Sequelize): typeof visitor {
    return visitor.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    article_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'article',
        key: 'id'
      }
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reference_url: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'visitor',
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
        name: "visitor_article_id_idx",
        using: "BTREE",
        fields: [
          { name: "article_id" },
        ]
      },
    ]
  });
  }
}
