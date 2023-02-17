import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  director: string;

  @Column()
  producer: string;

  @Column()
  release_date: Date;

  @Column()
  rt_score: number;
}