import classes from './ContentSection.module.css'

const ContentSection = (props) => {
  return (
    <div className={classes.contentsection}>
      {props.children}
    </div>
  )
}
export default ContentSection;