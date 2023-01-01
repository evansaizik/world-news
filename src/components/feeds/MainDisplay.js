import  classes from './MainDisplay.module.css';
import { useEffect } from 'react';
import Button from '../UI/Button';
import rightArrow from '../Assets/arrow-right.svg';
import leftArrow from '../Assets/arrow-left.svg';
import Spinner from '../UI/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { displayActions } from '../../store/displaySlice';

const MainDisplay = props => {
  const dispatch = useDispatch();

  const feeds = useSelector(state => state.display.data);
  const displayIndex = useSelector(state => state.display.displayIndex);
  const isLoading = useSelector(state => state.status.isLoading);
  
  useEffect(() => {
    let timeout = setTimeout(() => {
      dispatch(displayActions.next());
    }, 10000)
    
    return () => { clearTimeout(timeout) };
  });
  
  const nextShow = () => {
    dispatch(displayActions.next());
  }

  function prevShow() {
    dispatch(displayActions.prev());
  };

  return <section className={classes.section}>
    {isLoading && <Spinner className={classes.spinner} />}
    {!isLoading && feeds.map((feed, i) => {
      return <span 
      className={displayIndex === i? classes.span : classes.hidden} 
      key={feed.id}>
      <img className={classes.image} src={feed.imageUrl} alt='diagram' />
      <h2>{feed.title}</h2>
      <p>{feed.author}</p>
      <Button onClick={nextShow} className={classes['btn-right']} children={<img className={classes.right} src={rightArrow} alt='right arrow button' />} />
      <Button onClick={prevShow} className={classes['btn-left']} children={<img className={classes.left} src={leftArrow} alt='left arrow button' />} />
    </span>})}
  </section>
};

export default MainDisplay;