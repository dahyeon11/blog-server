import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";
import { User } from "./User";
import { Comment } from "./Comment";
import { Keyword } from "./Keyword";
import { Visitor } from "./Visitor";

@Index("article_user_id_idx", ["userId"], {})
@Index("article_category_id_idx", ["categoryId"], {})
@Entity("article", { schema: "blog" })
export class Article {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("int", { name: "category_id" })
  categoryId: number;

  @Column("varchar", { name: "title", length: 300 })
  title: string;

  @Column("longtext", { name: "content" })
  content: string;

  @Column("varchar", { name: "thumbnail_image", nullable: true, length: 300 })
  thumbnailImage: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 500 })
  image: string | null;

  @Column("datetime", {
    name: "createdAt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", {
    name: "updatedAt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;

  @ManyToOne(() => Category, (category) => category.articles, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "category_id", referencedColumnName: "id" }])
  category: Category;

  @ManyToOne(() => User, (user) => user.articles, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;

  @ManyToMany(() => Comment, (comment) => comment.articles)
  @JoinTable({
    name: "article_has_comment",
    joinColumns: [{ name: "article_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "comment_id", referencedColumnName: "id" }],
    schema: "blog",
  })
  comments: Comment[];

  @ManyToMany(() => Keyword, (keyword) => keyword.articles)
  @JoinTable({
    name: "article_has_keyword",
    joinColumns: [{ name: "article_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "keyword_id", referencedColumnName: "id" }],
    schema: "blog",
  })
  keywords: Keyword[];

  @OneToMany(() => Visitor, (visitor) => visitor.article)
  visitors: Visitor[];
}
