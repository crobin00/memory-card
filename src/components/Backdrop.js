import classes from '../styles/Backdrop.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeModal} />;
};

export default Backdrop;
