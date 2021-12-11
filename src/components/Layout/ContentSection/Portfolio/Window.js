import classes from './Window.module.css';

const Window = (props) => {
  return (
    <div className={classes.window}>
      <a href={props.webpageurl}><img src={props.imgurl} alt={props.description}/></a>
    </div>
  );
}

export default Window;