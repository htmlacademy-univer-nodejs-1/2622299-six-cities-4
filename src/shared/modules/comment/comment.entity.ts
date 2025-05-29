import { defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'comments',
  },
})
export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({ required: true, trim: true })
  public text!: string;

  @prop()
  public rating!: number;

  @prop()
  public author!: string;

  @prop()
  public offerId!: string;

  @prop()
  public date!: Date;
}

export const CommentModel = getModelForClass(CommentEntity);
