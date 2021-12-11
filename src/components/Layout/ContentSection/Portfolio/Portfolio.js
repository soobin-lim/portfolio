import classes from './Portfolio.module.css'
import ContentSection from '../../../UI/ContentSection'
import Window from './Window'
import Logos from '../../../UI/Logos/Logos'
import project3photo from '../../../../assets/project3.png'
import fitnessphoto from '../../../../assets/fitnesstracker.png'
import flightTicketPhoto from '../../../../assets/flightticket.png'

const Portfolio = () => {
  const flightTicketUrl='https://marcotorr.github.io/First_Project/'
  const flightTicketDescription='flight ticket bg'

  const fitnessTrackerUrl='https://mysterious-mountain-81779.herokuapp.com/'
  const fitnessTrackerDescription='fitnessTracker'

  const project3Url = 'https://protected-meadow-27063.herokuapp.com/signup'
  const project3Description = 'project3'

  
  return (
    <ContentSection className={classes.summary}>
      <h3>Portfolio</h3>
      <br></br><br></br>
      <div>
        <Window
          imgurl={fitnessphoto}
          webpageurl={fitnessTrackerUrl}
          description={fitnessTrackerDescription}>
        </Window>
        <Window
          imgurl={flightTicketPhoto}
          webpageurl={flightTicketUrl}
          description={flightTicketDescription}>
        </Window>
      </div>
      <br></br>
      <div>
        <Window
          imgurl={project3photo}
          webpageurl={project3Url}
          description={project3Description}>
        </Window>
        <Window
          imgurl={project3photo}
          webpageurl={project3Url}
          description={project3Description}>
        </Window>
      </div>
      <br></br>
      <div>
        <Window
          imgurl={project3photo}
          webpageurl={project3Url}
          description={project3Description}>
        </Window>
      </div>
      <br></br><br></br>
      <Logos />
    </ContentSection>

  )
}

export default Portfolio;