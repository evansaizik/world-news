import classes from './Spinner.module.css';

const Spinner = props => {
  return <div className={`${classes.spin} ${props.className}`}></div>
};

export default Spinner;