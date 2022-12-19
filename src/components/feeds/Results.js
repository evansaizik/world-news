import classes from './Results.module.css';
import photo from '../Assets/featured_img3.jpg';
import Category from '../category/Category';
import { useDispatch, useSelector } from 'react-redux';
import { paginationActions } from '../../store/store';

const Results = props => {
  const pageNumber = useSelector(state => state.currentPage)

  const dispatch = useDispatch()

  const nextPageHandler = () => {
    dispatch(paginationActions.nextPage())
  }
  const prevPageHandler = () => {
    dispatch(paginationActions.prevPage())
  }

  return <section className={classes.results}>
    <div className={classes.titleBar}>
      <h2>latest post</h2>
    </div>
    <Category onClick={props.onClick} />
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
      <button onClick={nextPageHandler} className={classes['btn-1']}>{`Page ${pageNumber - 1}`}</button>
      <button onClick={prevPageHandler} className={classes['btn-2']}>{`Page ${pageNumber + 1}`}</button>
      <span>{`Page ${pageNumber}`}</span>
    </div>
  </section>
};

export default Results;