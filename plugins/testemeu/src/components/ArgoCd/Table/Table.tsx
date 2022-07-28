import React from 'react';
import {
StatusError,
  StatusAborted,
  StatusOK,
  StatusPending,
  StatusRunning,
  StatusWarning,
  Table,
  InfoCard
} from '@backstage/core-components';

export default {
  title: 'Data Display/Status',
  component: StatusOK,
};



const containerStyle = { width: 600 };

// export const TableTeste = () => (
//  <div style={containerStyle}>
//    <InfoCard title="Available status types" noPadding>
//      <Table
//     options={{
//           search: false,
//          paging: false,
//          toolbar: false,
//        }}
//       data={data}
//       columns={columns}      />
//    </InfoCard>
//  </div>
// );

export const statusOK = () => <StatusOK />;
export const statusWarning = () => <StatusWarning />;
export const statusError = () => <StatusError />;
export const statusAborted = () => <StatusAborted />;
export const statusPending = () => <StatusPending />;
export const statusRunning = () => <StatusRunning />;
