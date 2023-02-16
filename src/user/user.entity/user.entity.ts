import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;
  
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;
}
