import { Fragment } from "react";
import classes from './HeaderLinkText.module.css';
import { Link } from "react-router-dom";
const HeaderLinkText = (props) => {
  return (
    <Fragment>
      <Link to={props.linkText}>
      <h2 className={classes.h2}>{props.linkText}</h2>
      </Link>
    </Fragment>
  )
}

export default HeaderLinkText;