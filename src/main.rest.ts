import 'reflect-metadata';
import { Container } from 'inversify';
import { Application } from './rest/index.js';
import { Component } from './shared/types/index.js';
import { createOfferContainer } from './shared/modules/offer/index.js';
import { createRestApplicationContainer } from './rest/rest.container.js';
import { createUserContainer } from './shared/modules/user/index.js';
import { createCommentContainer } from './shared/modules/comment/index.js';
import { createAuthContainer } from './shared/modules/auth/index.js';

async function bootstrap() {
  const container = new Container();
  createRestApplicationContainer(container);
  createUserContainer(container);
  createOfferContainer(container);
  createCommentContainer(container);
  createAuthContainer(container);

  const application = container.get<Application>(Component.Application);
  await application.init();
}

bootstrap();
