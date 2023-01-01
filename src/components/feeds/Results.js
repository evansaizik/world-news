import classes from './Results.module.css';
import Spinner from '../UI/Spinner';
import Button from '../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { resultActions } from '../../store/store';

const Results = props => {
  const dispatch = useDispatch();

  const pagelength = useSelector(state => state.result.pagelength);
  const currentPage = useSelector(state => state.result.currentPage);
  const isLoading = useSelector(state => state.status.isLoading);
  const error = useSelector(state => state.status.error);

  const page = useSelector(state => state.result.data)
  .slice((currentPage - 1) * 5 , currentPage * 5)
  .map(res => {
    return {
      id: res.id,
      image: res.imageUrl,
      title: `${res.title.substring(0, 65)}...`,
      newsUrl: res.url,
    }
  });
  
  const nextPage = () => {
    dispatch(resultActions.nextPage());
  };
  const prevPage = () => {
    dispatch(resultActions.prevPage());
  };

  return <section className={classes.results}>
    {isLoading && <Spinner className={classes.spinPosition}/>}
    <div className={classes.titleBar}>
      <h2>latest post</h2>
    </div>
    <div className={classes.search}>
      {error && <p className={classes.error}>{error}</p>}
      {!isLoading && page.map(res => {
        return <a href={res.newsUrl} target='_blank' rel='noreferrer' key={res.id}>
          <span>
            <img className={classes.searchImage} src={res.image} alt='styles' />
          </span>
        <p>{res.title}</p>
      </a>
      })}
    </div>
    <div className={classes.pagination}>
      {currentPage !== 1 && <Button onClick={prevPage} className={classes['btn-1']} children={`Page ${currentPage - 1}`} />}
      {pagelength !== currentPage && <Button onClick={nextPage} className={classes['btn-2']} children={`Page ${currentPage + 1}`}/>}
      <span>{`Page ${currentPage}`}</span>
    </div>
  </section>
};

export default Results;