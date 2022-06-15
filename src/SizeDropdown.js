import React from 'react';

export default function SizeDropdown({ setSize }) {
  return (
    <div>
      Pick a size
      <select onChange={(e) => setSize(e.target.value)}>
        <option value="1">Regular</option>
        <option value="2">Large</option>
      </select>
    </div>
  );
}
