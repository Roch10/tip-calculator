import React from 'react';

function CommonInput({
  label,
  value,
  onChange,
  imageUrl,
  type = 'text',
  onFocus,
  errorMessage,
  placeholder,
}) {
  const hasLabelOrError = label || errorMessage;
  const inputClasses = `${imageUrl ? 'with-image' : ''} ${errorMessage ? 'invalid' : ''}`;

  return (
    <div className="input-wrapper">
      {hasLabelOrError && (
        <div className="labelWrapper">
          <label>{label}</label>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </div>
      )}
      <input
        onFocus={onFocus || (() => { })}
        className={inputClasses}
        style={imageUrl ? { backgroundImage: `url("${imageUrl}")` } : {}}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CommonInput;
