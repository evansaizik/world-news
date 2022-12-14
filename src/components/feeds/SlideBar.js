import classes from './SlideBar.module.css';
import photo from '../Assets/photo.jpg'

const SlideBar = () => {
  const headlines = [
    {
      image: photo,
      title: 'Argentina beats Croatia 3-0.'
    },
    {
      image: photo,
      title: 'Man runs away after three days of marriage.'
    },
    {
      image: photo,
      title: 'Elon Musk set to buy Twitter.'
    },
    {
      image: photo,
      title: 'Boy wins Peak milk mathematics competition.'
    },
    {
      image: photo,
      title: 'twitter woman accuses best friend of sleeping with her husband in marital home.'
    },
    {
      image: photo,
      title: 'Pastor says BAT should backdown from the presidential campaign.'
    },
  ];

  return <div className={classes.container}>
    <div className={classes['item-1']}>
      <p>Latest News</p>
    </div>
    <div className={classes.slider}>
      {headlines.map(headline => {
      return <div className={classes['item-2']}>
        <img src={headline.image} alt='randompicture' />
        <p className={classes.title}>{headline.title}</p>
      </div>
      })}
    </div>
  </div>
};

export default SlideBar;