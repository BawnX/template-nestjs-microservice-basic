import { Column } from 'typeorm';
import { Trackable } from './trackable.fragment';
import { ITrackable } from "@main/config/models/interfaces/trackable";

export class BaseEntity<T> implements ITrackable
{
  constructor(init?: Partial<T>)
  {
    init && Object.assign(this, init);
  }

  @Column(() => Trackable)
  system!: Trackable;
}
