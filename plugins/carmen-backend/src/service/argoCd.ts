import fetch from 'node-fetch';

type statusArgo = {
  status: string;
  comparedTo: {
    source: {
      repoURL: string;
      path: string;
      targetRevision: string;
      plugin: {
        name: string;
      };
    };
    destination: {
      namespace: string;
      name: string;
    };
  };
  revision: string;
};

export const getArgo = async (argoUrl:string,argoToken:string) => {
  const value = async (): Promise<statusArgo> => {
    const response = await fetch(
      `${argoUrl}/api/v1/applications/backstage-stg`,
      {
        method: 'GET',
        headers: {
          Authorization: argoToken
        },
      },
    ).then((res) => res.json());
    return response.status.sync;
  };
  return (await value());
};