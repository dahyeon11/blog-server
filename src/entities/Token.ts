import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("token_user_id_idx", ["userId"], {})
@Entity("token", { schema: "blog" })
export class Token {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("tinyint", { name: "type", nullable: true })
  type: number | null;

  @Column("varchar", { name: "value", nullable: true, length: 300 })
  value: string | null;

  @Column("datetime", { name: "exp", nullable: true })
  exp: Date | null;

  @Column("datetime", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => User, (user) => user.tokens, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
