import { SiLinkedin, SiGithub, SiStackoverflow } from "react-icons/si";
import classes from './Logos.module.css';
const Logos = () => {
  return <div>
    <a href="http://google.com"><SiLinkedin className={classes.logo} /></a>
    <a href="http://google.com"><SiGithub className={classes.logo} /></a>
    <a href="http://google.com"><SiStackoverflow className={classes.logo} /></a>
  </div>
}

export default Logos;