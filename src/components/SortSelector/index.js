import React from 'react';
import './index.css';

const Checkbox = ({onChange, selectedOption}) => {
  const disableSort = selectedOption === 1;
  return (
    <div className={['sort-options-container']}>
      <input
        disabled={!disableSort}
        className={['sort-name-input']}
        type="checkbox"
        onChange={onChange}
      />
      <p className={['sort-name-label']}>Sort by User Name</p>
      <input
        className={['sort-stars-input']}
        type="checkbox"
        disabled={disableSort}
        onChange={onChange}
      />
      <p className={['sort-stars-label']}>Sort by Star Count</p>
    </div>
  );
};
export default Checkbox;
