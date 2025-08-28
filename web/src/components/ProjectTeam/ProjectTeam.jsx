const ProjectTeam = (props) => {
  const {title, img, para} = props.projectTeam
  return (
    <>
      <div className="project-item">
        <img src={img} alt="" className="m-b-30" />
        <div className="project-item-body text-center">
          <h3>{title}</h3>
          <p>{para}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectTeam
