import classes from './Category.module.css';

import icon from '../Assets/searchicon.svg';
import { useState } from 'react';
import Button from '../UI/Button';

const Category = props => {
  const [search, setSearch] = useState('');
  const submitFormHandler = (e) => {
    e.preventDefault();
    props.onClick(search)
    setSearch('');
  }

  const getValue = (e) => {
    setSearch(e.target.value);
  }

  return <form onSubmit={submitFormHandler} className={classes.form}>
    <label htmlFor='input' />
    <input id='input' value={search} onChange={getValue} />
    <Button
      children={<img src={icon} width='30px' alt='SVG as a button' />}
    />
  </form>
};

export default Category;