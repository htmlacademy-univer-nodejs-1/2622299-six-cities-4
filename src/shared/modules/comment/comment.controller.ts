import { inject, injectable } from 'inversify';
import { BaseController, HttpMethod, ValidateDtoMiddleware, PrivateRouteMiddleware } from '../../libs/rest/index.js';
import { Component } from '../../types/index.js';
import { Logger } from '../../libs/logger/index.js';
import { CommentRdo, CommentService, CreateCommentDto } from './index.js';
import { OfferService } from '../offer/index.js';
import { Response } from 'express';
import { fillDTO } from '../../helpers/common.js';
import { CreateCommentRequest } from './types/create-comment-request.type.js';

@injectable()
export default class CommentController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.CommentService)
    private readonly commentService: CommentService,
    @inject(Component.OfferService) private readonly offerService: OfferService,
  ) {
    super(logger);

    this.logger.info('Initializing routes for CommentController...');
    this.addRoute({
      path: '/',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [
        new PrivateRouteMiddleware(),
        new ValidateDtoMiddleware(CreateCommentDto),
      ],
    });
  }

  public async create(
    { body, tokenPayload }: CreateCommentRequest,
    res: Response,
  ): Promise<void> {
    const newComment = await this.commentService.create({
      ...body,
      author: tokenPayload.id,
    });

    await this.offerService.incCommentCount(body.offerId);

    this.created(res, fillDTO(CommentRdo, newComment));
  }
}
