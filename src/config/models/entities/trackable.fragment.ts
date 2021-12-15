import { Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export class Trackable
{
  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn({ nullable: true })
  deletedDate?: Date;

  @Column({ default: false })
  isDisabled: boolean;
}
