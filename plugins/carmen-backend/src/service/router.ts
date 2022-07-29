import { errorHandler } from '@backstage/backend-common';
import { Config } from '@backstage/config';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
import { getArgo } from './argoCd';

export interface RouterOptions {
  logger: Logger;
}

export async function createRouter(
  options: RouterOptions,
  config: Config
): Promise<express.Router> {
  const { logger } = options;

  const router = Router();
  router.use(express.json());

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.send({ status: 'ok' });
  });

  router.get('/', async (_, res) => {
    let argoUrl = config.getOptionalString("gym.argocdUrl")??"";
    let argoToken = config.getOptionalString("gym.argocdToken")??"";
    const responseArgo = await getArgo(argoUrl,argoToken);
    options.logger.error(`argoToken:${argoToken}`);
    res.status(200).send(responseArgo);
  });

  router.use(errorHandler());
  return router;
}