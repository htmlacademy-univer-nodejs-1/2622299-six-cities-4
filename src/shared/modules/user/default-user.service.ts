import { DocumentType, types } from '@typegoose/typegoose';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UserService } from './user-service.interface.js';
import { UserEntity } from './user.entity.js';
import { inject, injectable } from 'inversify';
import { Component } from '../../types/component.enum.js';
import { Logger } from '../../libs/logger/index.js';
import { DEFAULT_AVATAR_FILE_NAME } from './user.constant.js';

@injectable()
export class DefaultUserService implements UserService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.UserModel)
    private readonly userModel: types.ModelType<UserEntity>
  ) {}

  public async create(
    dto: CreateUserDto,
    salt: string
  ): Promise<DocumentType<UserEntity>> {
    const user = new UserEntity({ ...dto, avatar: DEFAULT_AVATAR_FILE_NAME });
    user.setPassword(dto.password, salt);

    const createdUser = await this.userModel.create(user);
    this.logger.info(`New user created: ${createdUser.mail}`);

    return createdUser;
  }

  public async findByEmail(
    mail: string
  ): Promise<DocumentType<UserEntity> | null> {
    return this.userModel.findOne({ mail }).exec();
  }

  public async findOrCreate(
    dto: CreateUserDto,
    salt: string
  ): Promise<DocumentType<UserEntity>> {
    const existingUser = await this.findByEmail(dto.mail);

    if (existingUser) {
      return existingUser;
    }

    return this.create(dto, salt);
  }

  public async findById(userId: string): Promise<DocumentType<UserEntity> | null> {
    return this.userModel.findById(userId).exec();
  }
}
