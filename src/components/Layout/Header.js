import {Fragment} from 'react'
import classes from './Header.module.css';

import headerImage from '../../assets/img1.jpg'

const Header = props => {
  return <Fragment>
    <header className={classes.header}>
      <h1>Soobin Lim</h1>
    </header>
    <div className={classes['main-image']}>
      <img src={headerImage} alt="background image"></img>
    </div>
  </Fragment>
};

export default Header;