import React, {useState} from 'react';
import Users from '../Users';
import Repos from '../Repos';
import QueryTypeSelector from '../QuerySelector';
import './index.css';



const View = () => {
  const handleInput = event => {
    console.log(event.target.value);
  };
  const [selectedOption, setSelectedOption] = useState();

  const handleChange = e => {
    setSelectedOption(e);
  };
  console.log('selectedOption', selectedOption);
  return (
    <>
      <h1>View</h1>
      <input onChange={handleInput} type="text"></input>
      <QueryTypeSelector selectedOption={selectedOption} handler={handleChange} />

      {selectedOption && selectedOption.value === 1 && <Users />}
      {selectedOption && selectedOption.value === 2 && <Repos />}
    </>
  );
};
export default View;
