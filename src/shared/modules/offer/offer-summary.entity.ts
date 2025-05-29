import {
  defaultClasses,
  getModelForClass,
  modelOptions,
  prop,
  Ref,
} from '@typegoose/typegoose';
import { ApartmentType, TownType } from '../../types/index.js';
import { UserEntity } from '../user/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferSummaryEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers',
  },
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferSummaryEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true })
  public title!: string;

  @prop({ required: true })
  public cost!: number;

  @prop({ type: () => String, enum: ApartmentType, required: true })
  public apartmentType!: ApartmentType;

  @prop({ default: false })
  public isFavorite!: boolean;

  @prop({ required: true })
  public date!: Date;

  @prop({ type: () => String, enum: TownType, required: true })
  public town!: TownType;

  @prop()
  public previewImage!: string;

  @prop({ default: false })
  public isPremium!: boolean;

  @prop({ default: 0 })
  public rating!: number;

  @prop({ default: 0 })
  public commentCount!: number;

  @prop({ ref: UserEntity, required: true })
  public userId!: Ref<UserEntity>;
}

export const OfferSummaryModel = getModelForClass(OfferSummaryEntity);
