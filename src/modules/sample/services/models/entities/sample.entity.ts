import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "@main/config/models/entities/base.entity";
import { ITrackable } from "@main/config/models/interfaces/trackable";

@Entity("UserSample", { schema: "Sample" })
export class User extends BaseEntity<User> implements ITrackable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 64
  })
  name: string;

  @Column({
    nullable: true
  })
  description: string;
}
