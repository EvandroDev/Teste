import React from 'react';
import useAsync from 'react-use/lib/useAsync';

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

export const ArgoCd = () => {
  const { value, loading, error } = useAsync(async (): Promise<statusArgo> => {
    const response = await fetch('http://localhost:7007/api/carmen');
    const data = await response.json();
    return data;
  });

  if (loading) {
    return <div><h1>Aguarde...</h1></div>;
  } else if (error) {
    return (
      <div>
        <h1>Erro: {error.message}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Status: {value?.status}</h1>
    </div>
  );
};