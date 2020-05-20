import React from 'react';
import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <fieldset className='group'>
      <input
        className='form-input'
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </fieldset>
  )
};

export default FormInput;