import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./Article";

@Entity("comment", { schema: "blog" })
export class Comment {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "guest_name", nullable: true, length: 300 })
  guestName: string | null;

  @Column("varchar", { name: "guest_password", nullable: true, length: 300 })
  guestPassword: string | null;

  @Column("varchar", { name: "content", nullable: true, length: 500 })
  content: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 45 })
  image: string | null;

  @Column("datetime", {
    name: "createdAt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", {
    name: "updateAt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updateAt: Date | null;

  @ManyToMany(() => Article, (article) => article.comments)
  articles: Article[];
}
