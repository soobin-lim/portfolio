import { Fragment } from "react";
import classes from './HeaderLinkText.module.css';

const HeaderLinkText = (props) => {
  return (
    <Fragment>
      <h2 className={classes.h2}>{props.linkText}</h2>
    </Fragment>
  )
}

export default HeaderLinkText;