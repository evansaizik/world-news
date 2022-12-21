import classes from './Header.module.css';

const Header = props => {
  const getNewsCategory = (e) => {
    props.onClick(e.target.value)
  };

  return <>
    <header className={classes.header}>
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
      <label className={classes.switch}>
        <input type='checkbox' />
        <span className={`${classes.slider} ${classes.round}`} ></span>
      </label>
    </header>
    <h1 className={classes.title}>Civil</h1>
    <section className={classes.cat}>
      <input id='all' value='all' type='radio' name='category' onClick={getNewsCategory} />
      <label htmlFor='all'>All</label>
      <input id='business' value='business' type='radio' name='category' onClick={getNewsCategory} />
      <label htmlFor='business'>Business</label>
      <input id='politics' value='politics' type='radio' name='category' onClick={getNewsCategory} />
      <label htmlFor='politics'>Politics</label>
      <input id='auto' value='automobile' type='radio' name='category' onClick={getNewsCategory} />
      <label htmlFor='auto'>Automobile</label>
      <input id='entertainment' value='entertainment' type='radio' name='category' onClick={getNewsCategory} />
      <label htmlFor='entertainment'>Entertainment</label>
      <input id='sports' value='sports' type='radio' name='category' onClick={getNewsCategory} />
      <label htmlFor='sports'>Sports</label>
    </section>
  </>
};

export default Header;