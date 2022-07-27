import { errorHandler } from '@backstage/backend-common';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
import fetch from 'node-fetch'

export interface RouterOptions {
  logger: Logger;
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger } = options;

  const router = Router();
  router.use(express.json());

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.send({ status: 'ok' });
  });

  router.get('/', async (_, res) => {
    const responseArgo = getArgo();
    res.status(200).send(responseArgo);
  });

  router.use(errorHandler());
  return router;
}

type statusArgo = {
  status: string;
};

export const getArgo = () => {
  const value = async (): Promise<statusArgo> => {
    const response = await fetch(
      'https://argocd.adm-stg.gcp.gruposbf.com.br/api/v1/applications/backstage-stg',
      {
        method: 'GET',
        headers: {
          Authorization:
            ""
        },
      },
    );
    const data = await response.json();
    return data.status.sync;
  };
  return value();
};
