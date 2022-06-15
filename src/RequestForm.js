import React, { useState } from 'react';

export default function RequestForm({ setRequests, handleSubmit }) {
  const [requestInput, setRequestInput] = useState('');
  return (
    <form>
      <input onChange={(e) => setRequestInput(e.target.value)} />
    </form>
  );
}
