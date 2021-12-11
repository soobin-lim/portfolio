import { Fragment } from 'react'
import classes from './Header.module.css';
import HeaderLinkText from '../../HeaderLinkText/HeaderLinkText'
import headerImage from '../../../assets/img1.jpg'

const Header = props => {
  return <Fragment>
    <header className={classes.header}>
      <h1>Soobin Lim</h1>
      <div className={classes.links}>
        <HeaderLinkText linkText='About Me'/>
        <HeaderLinkText linkText='Portfolio'/>
        <HeaderLinkText linkText='Contact'/>
        <HeaderLinkText linkText='Resume'/>
      </div>
    </header>
    <div className={classes['bg-image']}>
      <img src={headerImage} alt="background"></img>
    </div>
  </Fragment>
};

export default Header;