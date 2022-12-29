import classes from './Header.module.css';
import Darkmode from 'darkmode-js';

const Header = props => {
  const darkmode = new Darkmode();

  const getNewsCategory = (e) => {
    props.onClick(e.target.value)
  };

  const newsCategory = [
    {
      id: 'all',
      child: 'All',
    },
    {
      id: 'business',
      child: 'Business',
    },
    {
      id: 'politics',
      child: 'Politics',
    },
    {
      id: 'automobile',
      child: 'Auto',
    },
    {
      id: 'entertainment',
      child: 'Entertainment',
    },
    {
      id: 'sports',
      child: 'Sports',
    },
  ];

  const toggleHandler = () => { darkmode.toggle() };

  return <>
    <header className={classes.header}>
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
      <label className={classes.switch}>
        <input type='checkbox' onClick={toggleHandler} />
        <span className={`${classes.slider} ${classes.round}`} ></span>
      </label>
    </header>
    <h1 className={classes.title}>Civil</h1>
    <section className={classes.cat}>
      {newsCategory.map(news => {
        return <span key={news.id}>
          <input id={news.id} value={news.id} type='radio' name='category' onClick={getNewsCategory} />
          <label htmlFor={news.id}>{news.child}</label>
        </span>
      })}
    </section>
  </>
};

export default Header;