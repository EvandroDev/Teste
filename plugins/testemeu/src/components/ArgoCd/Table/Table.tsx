import React from 'react';
import {
  StatusError,
  StatusAborted,
  StatusOK,
  StatusPending,
  StatusRunning,
  StatusWarning,
  Table,
  InfoCard,
} from '@backstage/core-components';
import { statusArgo } from '../ArgoCd';

export default {
  title: 'Data Display/Status',
  component: StatusOK,
};

const columns = [
  { field: 'status', title: 'Status' },
  { field: 'usage', title: 'Revision' },
];

const containerStyle = { width: 600 };

export function TableArgo(props: any) {
  return (
    <div style={containerStyle}>
      <InfoCard title="Argo CD Status" noPadding>
        <Table
          options={{
            search: false,
            paging: false,
            toolbar: false,
          }}
          data={validarStatus(props.respArgo)}
          columns={columns}
        />
      </InfoCard>
    </div>
  );
}

function Status(props: { sync: statusArgo | undefined }) {
  switch (props.sync?.status) {
    case 'Synced':
      return <StatusOK>Synced</StatusOK>;
    default:
      return <StatusError>Error</StatusError>;
  }
}

function validarStatus(resp: statusArgo | undefined) {
  return [
    {
      status: <Status sync={resp} />,
      usage: resp?.revision,
    },
  ];
}
