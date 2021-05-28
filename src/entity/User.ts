import { Base } from './index';
import { Entity, Column } from 'typeorm';

@Entity()
export default class User extends Base {
  @Column()
  username: string
  @Column()
  password: string
  @Column()
  email: string
  @Column()
  role: string
  @Column()
  isActive: boolean

};

