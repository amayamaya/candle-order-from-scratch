import React from 'react';

export default function Candle({ scentId, glassId, sizeId }) {
  return (
    <div className="candle">
      <img src={`size-${sizeId}.jpg`} />
      <img src={`scent-${scentId}.jpg`} />
      <img src={`glass-${glassId}.jpg`} />
    </div>
  );
}
