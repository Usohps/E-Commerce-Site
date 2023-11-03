import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return <div className='flex max-w-screen items-center justify-between h-screen'>
    <div className={classes.spinner}></div>;
  </div>
}

export default LoadingSpinner;
