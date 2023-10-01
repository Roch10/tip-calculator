import React, { useState } from 'react';
import Input from './Input';

function TipsSection({ tipSelectionList = [], onSelect }) {
  const [selectedValue, setSelectedValue] = useState('input');

  const handleTipSelect = (x) => {
    setSelectedValue(x);
    onSelect({ tipPercentage: +x });
  };

  return (
    <div className="tips-wrapper">
      {tipSelectionList.map((x, i) => (
        <div key={i}>
          <div
            className={`tipBox${selectedValue === x ? ' selected' : ''}`}
            onClick={() => handleTipSelect(x)}
          >
            {x}%
          </div>
        </div>
      ))}
      <div>
        <Input onChange={(e) => onSelect({ tipAmount: +e })} onFocus={() => setSelectedValue('input')} />
      </div>
    </div>
  );
}

export default TipsSection;
