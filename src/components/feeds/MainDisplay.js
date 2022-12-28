import  classes from './MainDisplay.module.css';
import { useEffect, useState } from 'react';
import Button from '../UI/Button';
import rightArrow from '../Assets/arrow-right.svg';
import leftArrow from '../Assets/arrow-left.svg';

const MainDisplay = props => {
  const feeds = props.data;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIndex(index + 1)
    }, 10000)

    return () => { clearTimeout(timeout) };
  });

  const next = () => {
    if (index === feeds.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prev() {
    if (index === 0) {
      setIndex(feeds.length - 1);
      return;
    } 
    setIndex(index - 1);
  };

  return <section className={classes.section}>
    {feeds.map((feed, i) => {
    return <span 
    className={index === i? classes.span : classes.hidden} 
    key={feed.id}>
      <img className={classes.image} src={feed.imageUrl} alt='diagram' />
      <h2>{feed.title}</h2>
      <p>{feed.author}</p>
      <Button onClick={next} className={classes['btn-right']} children={<img className={classes.right} src={rightArrow} alt='right arrow button' />} />
      <Button onClick={prev} className={classes['btn-left']} children={<img className={classes.left} src={leftArrow} alt='left arrow button' />} />
    </span>})}
  </section>
};

export default MainDisplay;