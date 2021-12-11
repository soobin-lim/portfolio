import classes from './Contact.module.css'
import ContentSection from '../../../UI/ContentSection'

const Contact = () => {
  return (
    <ContentSection className={classes.summary}>
      <h2>Soobin Lim</h2>
      <p>Email: sblim.monterrey@gmail.com</p>
      <p>Github: github.com/soobin-lim</p>
      <p>LinkedIn: https://www.linkedin.com/in/soobin-lim-738835210/</p>
    </ContentSection>
  )
}

export default Contact;