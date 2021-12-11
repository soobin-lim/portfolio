import classes from './AboutMe.module.css'
import ContentSection from '../../../UI/ContentSection'
import photo1 from '../../../../assets/avatarphoto.jpg'
const AboutMe = () => {
  return (
    <ContentSection className={classes.summary}>
      <div className={classes.container}>
        <div className={classes.pbox2}>
          <h3>About Me_______</h3>
          <img src={photo1} alt='avatar profile'></img>
        </div>
        <div className={classes.pbox}>
          <p>I came to bootcamp and learned a lot about web development world.(Node JS, Express, Mysql, MongoDB, React and more)</p>
          <p>As a SAP PP/SD user/administrator for three years in Car material company (IT Manager).</p>
          <p>I studied some python and PYQT5, and studied some Stock Market API. It was simple program to buy some stocks in 9 am. (just trying to buy fast, It was very simple program but working OK. (just for one user))</p>
          <p>I developed a label printing program (I studied some Zebra Printer API,Java Eclipse Development and Window builder library. It was a simple Shipping Label Printing Program, but it was used for two years continuously. I didn't know anything but just had to make it fast.)</p>
          <p>I used to use Excel vba script and SAP GUI Script daily basis(expending for three years), my ex-collegue is still using my macros.</p>
          <p>Flash action script 2.0 in my 20s. Daily usage in office work(design, ppt, video), military service as a computer management soldier.</p>
          <p>Computer science university in Seoul(Just 4 semesters)</p>
        </div>
      </div>
    </ContentSection>
  )
}

export default AboutMe;