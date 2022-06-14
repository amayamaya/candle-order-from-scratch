import React from 'react';

export default function GlassDropdown({ setGlass }) {
  return (
    <div>
      Pick the glass color
      <select onChange={(e) => setGlass(e.target.value)}>
        <option value="1">Clear</option>
        <option value="2">Dark</option>
      </select>
    </div>
  );
}
