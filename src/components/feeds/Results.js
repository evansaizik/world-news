import classes from './Results.module.css';
import { useState } from 'react';
import Spinner from '../UI/Spinner';
import Button from '../UI/Button';

const Results = props => {
  const [pageNumber, setPageNumber] = useState(1);
  const error = props.data.error;
  let searchResult = props.data.newsData.map(res => {
    return {
      id: res.id,
      image: res.imageUrl,
      title: `${res.title.substring(0, 65)}...`,
      newsUrl: res.url,
    }
  });
  
  const isLoading = props.data.isLoading;

  const numberOfPages = Math.ceil(searchResult.length / 5);

  searchResult = searchResult.slice((pageNumber - 1) * 5 , pageNumber * 5)

  const nextPage = () => {
    if (numberOfPages === pageNumber) return;
    setPageNumber(pageNumber + 1);
  };
  const prevPage = () => {
    if(pageNumber === 1) return ;
    setPageNumber(pageNumber - 1);
  };

  return <section className={classes.results}>
    {isLoading && <Spinner className={classes.spinPosition}/>}
    <div className={classes.titleBar}>
      <h2>latest post</h2>
    </div>
    <div className={classes.search}>
      {error && <p className={classes.error}>{error}</p>}
      {!isLoading && searchResult.map(res => {
        return <a href={res.newsUrl} target='_blank' rel='noreferrer' key={res.id}>
          <span>
            <img className={classes.searchImage} src={res.image} alt='styles' />
          </span>
        <p>{res.title}</p>
      </a>
      })}
    </div>
    <div className={classes.pagination}>
      {pageNumber !== 1 && <Button onClick={prevPage} className={classes['btn-1']} children={`Page ${pageNumber - 1}`} />}
      {numberOfPages !== pageNumber && <Button onClick={nextPage} className={classes['btn-2']} children={`Page ${pageNumber + 1}`}/>}
      <span>{`Page ${pageNumber}`}</span>
    </div>
  </section>
};

export default Results;