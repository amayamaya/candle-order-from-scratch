import React from 'react';

export default function Candle({ scentID, glassId, toppingsId }) {
  return (
    <div className="candle">
      <img src={`scent-${scentID}.jpeg`} />
      <img src={`glass-${glassId}.jpeg`} />
      <img src={`toppings-${toppingsId}.jpeg`} />
    </div>
  );
}
