import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Kucing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jenis: string;

  @Column('text')
  deskripsi: string;

  @Column('text')
  karateristik: string;

  @Column('text')
  image: string;
}

