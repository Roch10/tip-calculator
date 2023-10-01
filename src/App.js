import React, { useEffect, useState } from 'react';
import './App.scss';
import Input from './components/Input';
import TipsSection from './components/TipsSection';

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const [tipAmount, setTipAmount] = useState(0);
  const [tip, setTip] = useState({});

  const tipSelectionList = [5, 10, 15, 25, 50];

  useEffect(() => {
    if (tip.tipAmount) {
      setTipAmount(tip.tipAmount);
    } else if (tip.tipPercentage) {
      setTipAmount((tip.tipPercentage / 100) * billAmount);
    }
  }, [tip, billAmount]);

  const handleBillAmountChange = (value) => {
    setBillAmount(value);
  };

  return (
    <div className="main-container">
      <img className="logo" src="images/logo.svg" alt="Logo" />
      <div className="wrapper">
        <div className="calculator-wrapper">
          <Input
            value={billAmount}
            onChange={handleBillAmountChange}
            type="number"
            label="Bill"
            imageUrl="images/icon-dollar.svg"
            placeholder="0"
          />

          <p>Select Tip %</p>
          <TipsSection tipSelectionList={tipSelectionList} onSelect={setTip} />

          <Input
            placeholder="0"
            value={numberOfPeople ? numberOfPeople : ''}
            onChange={setNumberOfPeople}
            type="number"
            label="Number of People"
            imageUrl="images/icon-person.svg"
            errorMessage={numberOfPeople!=null && numberOfPeople < 1 ? "Can't be zero" : null}
          />
        </div>
        <div className="display-wrapper">
          <p>Tip Amount</p>
          <p>{tipAmount}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
