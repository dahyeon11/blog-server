import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Article } from "./Article.entity";

@Index("mother_category_id_idx", ["motherCategory"], {})
@Entity("category", { schema: "blog" })
export class Category {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;

  @Column("varchar", { name: "description", length: 45 })
  description: string;

  @Column("tinyint", { name: "depth" })
  depth: number;

  @Column("int", { name: "mother_category" })
  motherCategory: number;

  @OneToMany(() => Article, (article) => article.category)
  articles: Article[];

  @ManyToOne(() => Category, (category) => category.categories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "mother_category", referencedColumnName: "id" }])
  motherCategory2: Category;

  @OneToMany(() => Category, (category) => category.motherCategory2)
  categories: Category[];
}
