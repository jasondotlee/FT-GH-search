import React, {useState} from 'react';
import debounce from 'lodash/debounce';
import Users from '../Users';
import Repos from '../Repos';
import QueryTypeSelector from '../QuerySelector';
import Checkbox from '../SortSelector';
import './index.css';

const View = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [enableSort, setEnableSort] = useState(false);

  const handleSearchInput = event => {
    const search = debounce(event => setSearchTerm(event.target.value), 500);
    search(event);
  };

  const handleChange = e => {
    setSelectedOption(e);
  };

  const handleSortInputOption = event => {
    setEnableSort(event.target.checked);
  };

  return (
    <>
      <div className={['view-container']}>
        <h1 className={['view-header']}>Github Searcher</h1>

        <input
          className={['search-input']}
          onChange={handleSearchInput}
          type="text"
        />

        {selectedOption && (
          <Checkbox
            selectedOption={selectedOption.value}
            onChange={handleSortInputOption}
          />
        )}
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
            <Users searchTerm={searchTerm} enableSort={enableSort} />
          ) : (
            <Repos searchTerm={searchTerm} enableSort={enableSort} />
          ))}
      </div>
    </>
  );
};
export default View;
