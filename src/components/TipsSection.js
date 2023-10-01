import React, { useEffect, useState } from 'react';
import Input from './Input';

function TipsSection({ tipSelectionList = [], onSelect, tip }) {
  const [selectedValue, setSelectedValue] = useState('input');
  const [inputValue, setInputValue] = useState('');

  const handleTipSelect = (x) => {
    setSelectedValue(x);
    onSelect({ tipPercentage: +x });
    setInputValue('');
  };

  useEffect(() => {
    if (!(tip.tipAmount || tip.tipAmount === 0 || tip.tipPercentage)) {
      setSelectedValue('input');
      setInputValue('');
    }
  }, [tip]);

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
        <Input
          value={inputValue}
          placeholder='Custom'
          onChange={(e) => {
            onSelect({ tipAmount: e ? +e : 0 });
            setInputValue(e);
          }}
          onFocus={() => setSelectedValue('input')} />
      </div>
    </div>
  );
}

export default TipsSection;
