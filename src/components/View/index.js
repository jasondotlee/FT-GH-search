import React, {useState} from 'react';
import debounce from 'lodash/debounce';
import Users from '../Users';
import Repos from '../Repos';
import QueryTypeSelector from '../QuerySelector';
import './index.css';

const View = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  const handleInput = event => {
    const search = debounce(event => setSearchTerm(event.target.value), 30);
    search(event);
  };

  const handleChange = e => {
    setSelectedOption(e);
  };
  return (
    <>
      <h1>Flash Tract Github Search</h1>
      {!selectedOption && <h4>Please select an option</h4>}
      <input onChange={handleInput} type="text"></input>
      <QueryTypeSelector
        selectedOption={selectedOption}
        handler={handleChange}
      />

      {searchTerm?.length > 2 &&
        selectedOption &&
        (selectedOption.value === 1 ? (
          <Users search={searchTerm} />
        ) : (
          <Repos search={searchTerm} />
        ))}
    </>
  );
};
export default View;
