import classes from './Results.module.css';
import Category from '../category/Category';
import { useState } from 'react';

const Results = props => {
  const [pageNumber, setPageNumber] = useState(1);
  let searchResult = props.data.map(res => {
    return {
      id: res.id,
      image: res.imageUrl,
      title: res.title,
    }
  });

  console.log(searchResult)

  const numberOfPages = Math.ceil(searchResult.length / 5);
  console.log(numberOfPages)

  searchResult = searchResult.slice((pageNumber - 1) * 5 , (pageNumber * 5) - 1)

  const nextPage = () => {
    if (numberOfPages === pageNumber) return;
    setPageNumber(pageNumber + 1);
  };
  const prevPage = () => {
    if(pageNumber === 1) return ;
    setPageNumber(pageNumber - 1);
  };

  return <section className={classes.results}>
    <div className={classes.titleBar}>
      <h2>latest post</h2>
    </div>
    <Category onClick={props.onClick} />
    <ul className={classes.search}>
      {searchResult.map(res => {
        return <li key={res.id}>
        <img className={classes.searchImage} src={res.image} alt='styles' />
        <p>{res.title}</p>
      </li>
      })}
    </ul>
    <div className={classes.pagination}>
      {pageNumber !== 1 && <button onClick={prevPage} className={classes['btn-1']}>{`Page ${pageNumber - 1}`}</button>}
      {numberOfPages !== pageNumber && <button onClick={nextPage} className={classes['btn-2']}>{`Page ${pageNumber + 1}`}</button>}
      <span>{`Page ${pageNumber}`}</span>
    </div>
  </section>
};

export default Results;