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
    <div className={classes.pagination}>
      <button className={classes['btn-1']}>Page 1</button>
      <button className={classes['btn-2']}>Page 3</button>
      <span>Page 2</span>
    </div>
  </section>
};

export default Results;