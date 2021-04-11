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
    const search = debounce(event => setSearchTerm(event.target.value), 500);
    search(event);
  };

  const handleChange = e => {
    setSelectedOption(e);
  };
  return (
    <>
      <div className={['view-container']}>
        <h1 className={['view-header']}>Flash Tract Github Search</h1>

        <input className={['input']} onChange={handleInput} type="text"></input>
        {!selectedOption && (
          <h4 className={['prompt']}>Please select an option</h4>
        )}
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
      </div>
    </>
  );
};
export default View;
