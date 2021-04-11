import React from 'react';
import Select from 'react-select';
import './index.css';

const options = [
  {
    value: 1,
    label: 'Users',
  },
  {
    value: 2,
    label: 'Repos',
  },
];

const QueryTypeSelector = ({handler, selectedOption}) => {
  return (
    <div className="dropdown">
      <Select
        placeholder="Select Option"
        value={selectedOption}
        options={options}
        onChange={handler}
      />
    </div>
  );
};

export default QueryTypeSelector;
