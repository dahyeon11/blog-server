import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Article } from "./Article";

@Index("visitor_article_id_idx", ["articleId"], {})
@Entity("visitor", { schema: "blog" })
export class Visitor {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "article_id", nullable: true })
  articleId: number | null;

  @Column("datetime", { name: "timestamp", nullable: true })
  timestamp: Date | null;

  @Column("varchar", { name: "reference_url", nullable: true, length: 45 })
  referenceUrl: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 45 })
  ip: string | null;

  @ManyToOne(() => Article, (article) => article.visitors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "article_id", referencedColumnName: "id" }])
  article: Article;
}
