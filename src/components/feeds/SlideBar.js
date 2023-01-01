import { useSelector } from 'react-redux';
import classes from './SlideBar.module.css';

const SlideBar = props => {
  const headlines = useSelector(state => state.result.data)
  .map(data => {
    return {
      id: data.id,
      title: data.title,
      image: data.imageUrl,
    }
  });

  return <div className={classes.container}>
    <div className={classes['item-1']}>
      <p>Latest News</p>
    </div>
    <div className={classes.slider}>
      {headlines.map(headline => {
      return <div key={headline.id} className={classes['item-2'] }>
        <img src={headline.image} alt='randompicture' />
        <p className={classes.title}>{headline.title}</p>
      </div>
      })}
    </div>
  </div>
};

export default SlideBar;