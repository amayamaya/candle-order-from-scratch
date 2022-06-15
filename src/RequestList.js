import React from 'react';
import Request from './Request';

export default function RequestList({ requests }) {
  return (
    <div>
      {requests.map((request, i) => (
        <Request key={request + i} request={request} />
      ))}
    </div>
  );
}
