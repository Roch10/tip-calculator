import React from 'react';

function AmountDisplay({
  title,
  subtitle,
  amount
}) {
 

  return (
    <div className="amount-wrapper">
      <div className='amountLabel'>
        <p>{title}</p>
        <p className='sub-label'>{subtitle}</p>
      </div>
        <p className='amount'>${amount.toFixed(2)}</p>
    </div>
  );
}

export default AmountDisplay;
