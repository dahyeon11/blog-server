import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./Article";
import { Token } from "./Token";

@Entity("user", { schema: "blog" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 45 })
  email: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 45 })
  password: string | null;

  @Column("varchar", { name: "nickname", nullable: true, length: 45 })
  nickname: string | null;

  @Column("varchar", { name: "profile_image", nullable: true, length: 300 })
  profileImage: string | null;

  @Column("tinyint", { name: "role", nullable: true })
  role: number | null;

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

  @OneToMany(() => Article, (article) => article.user)
  articles: Article[];

  @OneToMany(() => Token, (token) => token.user)
  tokens: Token[];
}
