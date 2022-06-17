import React from 'react';

export default function SizeDropdown({ setSize }) {
  return (
    <div>
      Pick a size
      <select onChange={(e) => setSize(e.target.value)}>
        <option value="1">Large</option>
        <option value="2">Regular</option>
      </select>
    </div>
  );
}
