import { IsEmail, IsString } from 'class-validator';
import { CreateLoginUserMessage } from './login-user.messages.js';

export class LoginUserDto {
  @IsEmail({}, { message: CreateLoginUserMessage.mail.invalidFormat })
  @IsString({ message: CreateLoginUserMessage.password.invalidFormat })

  public mail!: string;

  public password!: string;
}
