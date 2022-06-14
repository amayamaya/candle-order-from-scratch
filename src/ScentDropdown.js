import React from 'react';

export default function ScentDropdown({ setScent }) {
  return (
    <div>
      Choose Your Scent
      <select onChange={(e) => setScent(e.target.value)}>
        <option value="1">Crisp Lavender</option>
        <option value="2">Rose Smoke</option>
        <option value="3">Moon Milk</option>
      </select>
    </div>
  );
}
