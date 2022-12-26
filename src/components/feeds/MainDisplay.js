import  classes from './MainDisplay.module.css';

const MainDisplay = props => {

  const feeds = props.data.map(data => {
    return {
      id: data.id,
      author: data.author,
      image: data.imageUrl,
      title: data.title,
      Url: data.url,
      content: data.content,
    }
  });

  return <section className={classes.section}>
    {feeds.map(feed => {
      return <span key={feed.id}>
        <img className={classes.image} src={feed.image} alt='diagram' />
        <h2>{feed.title}</h2>
        <p>{feed.author}</p>
      </span>
    })}
  </section>
};

export default MainDisplay;