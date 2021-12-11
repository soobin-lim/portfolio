import classes from './AboutMe.module.css'
import ContentSection from '../../../UI/ContentSection'
import photo1 from '../../../../assets/avatarphoto.jpg'
// import { GoMarkGithub } from "react-icons/go";
import Logos from '../../../UI/Logos/Logos'
const AboutMe = () => {
  return (
    <ContentSection className={classes.summary}>
      <div className={classes.container}>
        <div className={classes.pbox2}>
          <h3>About Me</h3>
          <img src={photo1} alt='avatar profile'></img>
        </div>
        <div className={classes.pbox}>
          <p>Node JS, Express, Mysql, MongoDB, React, MERN</p>
          <p>SAP PP/SD user, SAP GUI Script, Excel vba script</p>
          <p>Stock market API, PYQT5</p>
          <p>Zebra Printer API, Java Window builder, Mysql</p>
        </div>
      </div>
      <br></br>
      <Logos />

    </ContentSection>
  )
}

export default AboutMe;