import classes from './Category.module.css';

import icon from '../Assets/searchicon.svg';

const Category = () => {
  return <form className={classes.form}>
    <label htmlFor='input' />
    <input id='input'/>
    <button>
      <img src={icon} width='30px' alt='SVG as a button' />
    </button>
  </form>
};

export default Category;