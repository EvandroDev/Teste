import React, { useState, useEffect } from 'react';

type statusArgo = {
  status: string;
  // comparedTo: {
  //   source: {
  //     repoURL: string;
  //     path: string;
  //     targetRevision: string;
  //     plugin: {
  //       name: string;
  //     };
  //   };
  //   destination: {
  //     namespace: string;
  //     name: string;
  //   };
  // };
  // revision: string;
};

export function ArgoCd() {
  const [valor, setValor] = useState<statusArgo>({ status: 'aguarde...'});

  useEffect(() => {
    console.log("-----------1");
    const value = async (): Promise<statusArgo> => {
      console.log("-----------2");
      const response = await fetch('http://localhost:7007/api/carmen');
      console.log(response);
      const data = await response.json();
      console.log("-----------4");
      console.log("--------5"+JSON.stringify(data));
      return data.status.sync;
    };

    value().then(d => {
      setValor(d);
    });
  }, [valor]);

  return (
    <div>
      <h1>Status: {valor.status}</h1>
    </div>
  );
}
