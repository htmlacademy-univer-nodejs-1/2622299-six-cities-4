import { UserType } from '../../../types/user-type.enum.js';
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { CreateUserMessages } from './create-user.messages.js';

export class CreateUserDto {
  @IsEmail({}, { message: CreateUserMessages.mail.invalidFormat })
  @IsString({ message: CreateUserMessages.name.invalidFormat })
  @Length(1, 15, { message: CreateUserMessages.name.lengthField })
  @IsString({ message: CreateUserMessages.avatar.invalidFormat })
  @IsString({ message: CreateUserMessages.password.invalidFormat })
  @Length(6, 12, { message: CreateUserMessages.password.lengthField })
  @IsNotEmpty({ message: CreateUserMessages.type.missingType })
  @IsEnum(UserType, { message: CreateUserMessages.type.invalidType })

  public mail!: string;
  public name!: string;
  public avatar!: string | null;
  public password!: string;
  public type!: UserType;
}
