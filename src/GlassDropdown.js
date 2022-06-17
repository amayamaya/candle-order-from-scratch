import React from 'react';

export default function GlassDropdown({ setGlass }) {
  return (
    <div>
      Pick the glass color
      <select onChange={(e) => setGlass(e.target.value)}>
        <option value="1">Dark</option>
        <option value="2">Clear</option>
      </select>
    </div>
  );
}
