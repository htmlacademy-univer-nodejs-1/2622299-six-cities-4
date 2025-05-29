import { IsDateString, IsMongoId, IsNumber, IsString, Length, Max, Min } from 'class-validator';
import { CreateCommentMessages } from './create-comment.messages.js';

export class CreateCommentDto {
  @IsString({ message: CreateCommentMessages.text.invalidFormat })
  @Length(5, 1024, { message: 'min is 5, max is 1024 ' })
  @IsDateString({}, { message: CreateCommentMessages.date.invalidFormat })
  @IsNumber()
  @Min(1, { message: CreateCommentMessages.rating.min })
  @Max(5, { message: CreateCommentMessages.rating.max })
  @IsMongoId({ message: CreateCommentMessages.author.invalidFormat })
  public author!: string;

  public offerId!: string;
  public text!: string;
  public date!: string;
  public rating!: string;
}
