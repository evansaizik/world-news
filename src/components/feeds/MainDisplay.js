import  classes from './MainDisplay.module.css';
import photo from '../Assets/featured_img3.jpg'

const MainDisplay = () => {
  return <section className={classes.section}>
    <img className={classes.image} src={photo} alt='diagram' />
    <h2>CBN set to increase tax on all imports with effect from 15th january 2023</h2>
    <p>Cyril Afolabi</p>
  </section>
};

export default MainDisplay;