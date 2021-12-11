import classes from './Portfolio.module.css'
import ContentSection from '../../../UI/ContentSection'
import Window from './Window'
const Portfolio = () => {
  return (
    <ContentSection className={classes.summary}>
      <Window></Window>
    </ContentSection>
  )
}

export default Portfolio;