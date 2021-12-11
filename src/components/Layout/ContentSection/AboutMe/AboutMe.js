import classes from './AboutMe.module.css'
import ContentSection from '../../../UI/ContentSection'

const AboutMe = () => {
  return (
    <ContentSection className={classes.summary}>
      <h2>Delicious Food</h2>
      <p>txt1</p>
      <p>txt2</p>
    </ContentSection>
  )
}

export default AboutMe;