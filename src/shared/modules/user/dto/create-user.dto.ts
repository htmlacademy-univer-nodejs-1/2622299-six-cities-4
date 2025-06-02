import { UserType } from '../../../types/user-type.enum.js';
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length, IsOptional, Matches } from 'class-validator';
import { CreateUserMessages } from './create-user.messages.js';

export class CreateUserDto {
  @IsEmail({}, { message: CreateUserMessages.mail.invalidFormat })
  public mail!: string;

  @IsString({ message: CreateUserMessages.name.invalidFormat })
  @Length(1, 15, { message: CreateUserMessages.name.lengthField })
  public name!: string;

  @IsOptional()
  @IsString({ message: 'Avatar must be a string (filename or URL)' })
  @Matches(/\.(jpg|jpeg|png)$/i, { message: 'Avatar must be a .jpg or .png file' })
  public avatar?: string | null;

  @IsString({ message: CreateUserMessages.password.invalidFormat })
  @Length(6, 12, { message: CreateUserMessages.password.lengthField })
  public password!: string;

  @IsNotEmpty({ message: CreateUserMessages.type.missingType })
  @IsEnum(UserType, { message: CreateUserMessages.type.invalidType })
  public type!: UserType;
}
