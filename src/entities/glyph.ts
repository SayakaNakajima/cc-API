import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";
// import Transaction from "./TransactionModel";
// import User from "./UserModel";

/**
 * FIXME
 */
@Entity({name: "glyphs"})
class Glyph {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public glyph: string;

  @Column({type: "varchar", nullable: true})
  public radical: string;

  @Column({nullable: true})
  public strokes: number;

  @Column({nullable: true})
  public test_grade: string;
}

export default Glyph;
