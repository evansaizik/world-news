import classes from './Header.module.css';

const Header = () => {
  return <>
    <header className={classes.header}>
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
    </header>
    <h1 className={classes.title}>News</h1>
  </>
};

export default Header;