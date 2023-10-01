import React, { useEffect, useState } from 'react';
import './App.scss';
import Input from './components/Input';
import TipsSection from './components/TipsSection';
import AmountDisplay from './components/AmountDisplay';

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const [tipAmount, setTipAmount] = useState(0);
  const [tip, setTip] = useState({totalAmount:0});

  const tipSelectionList = [5, 10, 15, 25, 50];

  useEffect(() => {
    if (tip.tipAmount || tip.tipAmount===0) {
      setTipAmount(tip.tipAmount);
    } else if (tip.tipPercentage) {
      setTipAmount((tip.tipPercentage / 100) * billAmount);
    }
  }, [tip, billAmount]);

  const handleBillAmountChange = (value) => {
    setBillAmount(value);
  };

  const reset = () => {
    setBillAmount('');
    setNumberOfPeople(null);
    setTipAmount(0);
    setTip({})
  }

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
          <TipsSection tipSelectionList={tipSelectionList} onSelect={setTip} tip={tip} />

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
          <div>
            <AmountDisplay title='Tip Amount' subtitle='/ person' amount={tipAmount && numberOfPeople > 0 ? (tipAmount / numberOfPeople) : 0} />
            <AmountDisplay title='Total' subtitle='/ person' amount={numberOfPeople > 0 && billAmount ? ((+tipAmount + +billAmount) / +numberOfPeople) : 0} />
          </div>
         

          <button className='resetBtn' onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
