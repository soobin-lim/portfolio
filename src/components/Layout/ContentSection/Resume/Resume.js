import classes from './Resume.module.css'
import ContentSection from '../../../UI/ContentSection'
import resume from '../../../../assets/resume.png'
const Resume = () => {
  return (
    <ContentSection className={classes.summary}>
      <h2>Resume</h2>
      <img src={resume} alt='resume'></img>
    </ContentSection>
  )
}

export default Resume;