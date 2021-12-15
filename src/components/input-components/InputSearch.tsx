import React from 'react';

import "./InputSearch.css";

interface Props {
  handleChange: () => void
}

const InputSearch:React.FC<Props> = ({ handleChange }) => {
  return (
    <div className="input-search">
        <label>
          Имя:
          <input
           type="text"
           onChange={handleChange}
           placeholder="Введите исполнителя"
          />
        </label>
    </div>
  )
};

export default InputSearch;