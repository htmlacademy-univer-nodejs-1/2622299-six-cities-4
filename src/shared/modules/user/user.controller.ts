import { inject, injectable } from 'inversify';
import {
  BaseController,
  HttpError,
  HttpMethod,
  ValidateDtoMiddleware,
  UploadFileMiddleware,
  ValidateObjectIdMiddleware
} from '../../libs/rest/index.js';
import { Component } from '../../types/index.js';
import { Logger } from '../../libs/logger/index.js';
import { Request, Response } from 'express';
import { UserService } from './user-service.interface.js';
import { Config, RestSchema } from '../../libs/config/index.js';
import { StatusCodes } from 'http-status-codes';
import { fillDTO } from '../../helpers/index.js';
import { UserRdo } from './rdo/user.rdo.js';
import { CreateUserDto } from './index.js';
import { LoginUserDto } from './dto/login-user.dto.js';
import { AuthService } from '../auth/index.js';
import { LoggedUserRdo } from './rdo/logged-user.rdo.js';

@injectable()
export class UserController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.UserService) private readonly userService: UserService,
    @inject(Component.Config) private readonly configService: Config<RestSchema>,
    @inject(Component.AuthService) private readonly authService: AuthService
  ) {
    super(logger);
    this.logger.info('Registering routes for UserController...');

    this.addRoute({
      path: '/register',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [new ValidateDtoMiddleware(CreateUserDto)],
    });

    this.addRoute({
      path: '/login',
      method: HttpMethod.Post,
      handler: this.login,
      middlewares: [new ValidateDtoMiddleware(LoginUserDto)],
    });

    this.addRoute({
      path: '/:userId/avatar',
      method: HttpMethod.Post,
      handler: this.uploadAvatar,
      middlewares: [
        new ValidateObjectIdMiddleware('userId'),
        new UploadFileMiddleware(
          this.configService.get('UPLOADS_DIRECTORY'),
          'avatar'
        ),
      ],
    });

    this.addRoute({
      path: '/login',
      method: HttpMethod.Get,
      handler: this.checkAuthenticate,
    });
  }

  public async create(
    { body, tokenPayload }: Request & { body: CreateUserDto; tokenPayload?: { mail: string } },
    res: Response
  ): Promise<void> {
    const existingUser = await this.userService.findByEmail(body.mail);

    if (existingUser) {
      throw new HttpError(
        StatusCodes.CONFLICT,
        `User with email "${body.mail}" already exists.`,
        'UserController'
      );
    }

    if (tokenPayload) {
      throw new HttpError(
        StatusCodes.CONFLICT,
        `You (${tokenPayload.mail}) are already authorized.`,
        'UserController'
      );
    }

    const user = await this.userService.create(body, this.configService.get('SALT'));
    this.created(res, fillDTO(UserRdo, user));
  }

  public async login(
    { body }: Request & { body: LoginUserDto },
    res: Response
  ): Promise<void> {
    const user = await this.authService.verify(body);
    const token = await this.authService.authenticate(user);

    this.ok(res, fillDTO(LoggedUserRdo, {
      mail: user.mail,
      token,
    }));
  }

  public async uploadAvatar(req: Request, res: Response): Promise<void> {
    this.created(res, {
      filepath: req.file?.path ?? null,
    });
  }

  public async checkAuthenticate(
    { tokenPayload }: Request & { tokenPayload?: { mail: string } },
    res: Response
  ): Promise<void> {
    if (!tokenPayload?.mail) {
      throw new HttpError(StatusCodes.UNAUTHORIZED, 'Unauthorized', 'UserController');
    }

    const user = await this.userService.findByEmail(tokenPayload.mail);

    if (!user) {
      throw new HttpError(StatusCodes.UNAUTHORIZED, 'Unauthorized', 'UserController');
    }

    this.ok(res, fillDTO(LoggedUserRdo, user));
  }
}
