import { Column, Entity, ManyToMany } from "typeorm";
import { Article } from "./Article";

@Entity("keyword", { schema: "blog" })
export class Keyword {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;

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

  @ManyToMany(() => Article, (article) => article.keywords)
  articles: Article[];
}
