import PropTypes from 'prop-types';

import css from './Searchbar.module.css';
import { useState } from 'react';

export const Searchbar = ({ onFormSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const inputChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit(searchValue);
    event.target.reset();
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={inputChange}
        />
      </form>
      <button type="submit" className={css.SearchFormButton}>
        <span className={css.SearchFormButtonLabel}>Search</span>
      </button>
    </header>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func,
};
