import React from 'react';

export default function RequestForm({ requestInput, setRequestInput, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input value={requestInput} onChange={(e) => setRequestInput(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}
