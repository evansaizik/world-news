import classes from './Event.module.css';
import { useSelector } from 'react-redux';

const Event = props => {
  const sports = useSelector(state => state.sports.data).slice(0, 16).map(event => {
    return {
      Title: event.title,
      id: event.videos[0].id,
      title:event.videos[0].title,
      source: event.videos[0].embed.slice(106, 306),
    }
  })

  return <section className={classes.section}>
    <div className={classes.titleBar}>
      <h2>Football Highlights</h2>
    </div>
    {/* <Category /> */}
    <section className={classes.sportslist}>
      {sports.map( sport => {
        return <div className={classes.sport} key={sport.id}>
          <iframe
          src={sport.source}
          title={sport.title}
          width='100%'
          height='100%'
          allowFullScreen
          value='sameorigin'
          />
          <h3>{sport.Title}</h3>
        </div>
      })}
    </section>
  </section>
};

export default Event;