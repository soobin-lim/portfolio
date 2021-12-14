import { SiLinkedin, SiGithub, SiStackoverflow } from "react-icons/si";
import classes from './Logos.module.css';
const Logos = () => {
  return <div>
    <a href="https://www.linkedin.com/in/soobin-lim-738835210/"><SiLinkedin className={classes.logo} /></a>
    <a href="https://github.com/soobin-lim"><SiGithub className={classes.logo} /></a>
    <a href="https://stackoverflow.com/users/16053046/111sbl1"><SiStackoverflow className={classes.logo} /></a>
  </div>
}

export default Logos;