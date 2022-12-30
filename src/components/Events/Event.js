import classes from './Event.module.css';
import photo from '../Assets/featured_img3.jpg';
import Category from '../category/Category';

const Event = props => {
  return <section className={classes.section}>
    <div className={classes.titleBar}>
      <h2>Upcoming Events</h2>
    </div>
    <Category />
    <section className={classes.biznewslist}>
      <div className={classes.biznews}>
        <img src={photo} alt='news-pic' />
        <h3>business News</h3>
        <p>Oil price reaches a new monthly high.Oil price reaches a new monthly highOil price reaches a new monthly highOil </p>
      </div>
      <div className={classes.biznews}>
        <img src={photo} alt='news-pic' />
        <h3>business News</h3>
        <p>Oil price reaches a new monthly high.Oil price reaches a new monthly highOil price reaches a new monthly highOil </p>
      </div>
      <div className={classes.biznews}>
        <img src={photo} alt='news-pic' />
        <h3>business News</h3>
        <p>Oil price reaches a new monthly high.Oil price reaches a new monthly highOil price reaches a new monthly highOil </p>
      </div>
      <div className={classes.biznews}>
        <img src={photo} alt='news-pic' />
        <h3>business News</h3>
        <p>Oil price reaches a new monthly high.Oil price reaches a new monthly highOil price reaches a new monthly highOil </p>
      </div>
    </section>
  </section>
};

export default Event;