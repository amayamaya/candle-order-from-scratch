import React from 'react';

export default function SizeDropdown({ setSize }) {
  return (
    <div>
      Pick a size
      <select onChange={(e) => setSize(e.target.value)}></select>
      <option value="1">Regular</option>
      <option value="2">Regular</option>
    </div>
  );
}
