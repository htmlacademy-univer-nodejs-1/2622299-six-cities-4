import { DocumentType } from '@typegoose/typegoose';
import { CreateCommentDto } from './dto/create-comment.dto.js';
import { CommentEntity } from './comment.entity.js';

export interface CommentService {
  create(dto: CreateCommentDto): Promise<DocumentType<CommentEntity>>;
  findByOfferId(
    offerId: string,
    count?: number
  ): Promise<DocumentType<CommentEntity>[]>;
  deleteByOfferId(offerId: string): Promise<void>;
}
