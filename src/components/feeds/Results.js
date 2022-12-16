import classes from './Results.module.css';
import photo from '../Assets/featured_img3.jpg';
import Category from '../category/Category';

const Results = () => {
  return <section className={classes.results}>
    <div className={classes.titleBar}>
      <h2>latest post</h2>
    </div>
    <Category />
    <ul className={classes.search}>
      <li>
        <img className={classes.searchImage} src={photo} alt='styles' />
        <p>Argentina proceeds to the final in the world cup competition</p>
      </li>
      <li>
        <img className={classes.searchImage} src={photo} alt='styles' />
        <p>Argentina proceeds to the final in the world cup competition</p>
      </li>
      <li>
        <img className={classes.searchImage} src={photo} alt='styles' />
        <p>Argentina proceeds to the final in the world cup competition</p>
      </li>
      <li>
        <img className={classes.searchImage} src={photo} alt='styles' />
        <p>Argentina proceeds to the final in the world cup competition</p>
      </li>
      <li>
        <img className={classes.searchImage} src={photo} alt='styles' />
        <p>Argentina proceeds to the final in the world cup competition</p>
      </li>
    </ul>
  </section>
};

export default Results;