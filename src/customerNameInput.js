import React from 'react';

export default function CustomerNameInput({ setCustomerName }) {
  return (
    <section>
      <div>
        Who is this for?
        <input onChange={(e) => setCustomerName(e.target.value)} />
      </div>
    </section>
  );
}
