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

export const getArgo = async () => {
  const value = async (): Promise<statusArgo> => {
    const response = await fetch(
      'https://argocd.adm-stg.gcp.gruposbf.com.br/api/v1/applications/backstage-stg',
      {
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjAyMjYxNTgsImp0aSI6ImJhY2tzdGFnZS1zdGciLCJpYXQiOjE2NTc2MzQxNTgsImlzcyI6ImFyZ29jZCIsIm5iZiI6MTY1NzYzNDE1OCwic3ViIjoiZ2l0aHViLXJ1bm5lcjphcGlLZXkifQ.b0bBNOREsD4cOnzcNqo0XoW0KTl_9Fi0477McUP7624',
        },
      },
    ).then((res) => res.json());
    return response.status.sync;
  };
  return (await value());
};