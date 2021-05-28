import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Base {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  createdDate: Date;
  @Column()
  updatedDate: number;

}
