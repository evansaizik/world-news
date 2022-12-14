import classes from './SlideBar.module.css';
import photo from '../Assets/photo.jpg'

const SlideBar = () => {
  return <div className={classes.container}>
    <div className={classes['item-1']}>
      <p>Latest News</p>
    </div>
    <div className={classes.slider}>
      <div className={classes['item-2']}>
        <img src={photo} alt='randompicture' />
        <span>headlines</span>
      </div>
      <div className={classes['item-2']}>
        <img src={photo} alt='randompicture' />
        <span>headlines</span>
      </div>
      <div className={classes['item-2']}>
        <img src={photo} alt='randompicture' />
        <span>headlines</span>
      </div>
      <div className={classes['item-2']}>
        <img src={photo} alt='randompicture' />
        <span>headlines</span>
      </div>
      <div className={classes['item-2']}>
        <img src={photo} alt='randompicture' />
        <span>headlines</span>
      </div>
      <div className={classes['item-2']}>
        <img src={photo} alt='randompicture' />
        <span>headlines</span>
      </div>

    </div>
  </div>
};

export default SlideBar;