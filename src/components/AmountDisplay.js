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
      <div>
        <p className='amount'>${amount}</p>
      </div>
    </div>
  );
}

export default AmountDisplay;
