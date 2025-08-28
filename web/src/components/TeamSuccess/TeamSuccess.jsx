import RestLists from '../RestLists/RestLists'
import ServicesRest from '../ServicesRest/ServicesRest'

const TeamSuccess = (props) => {
  const { title, para, img, servicesRest } = props.teamSucess
  return (
    <>
      <div className="p-t-100 team-success-bg">
        <div className="container team-success text-center">
          <h2>{title}</h2>
          <p className="m-b-60">{para}</p>
          <img src={img} alt="" className="team-success-img" />
        </div>
        <div className="m-t-80">
          <ServicesRest serviceCardData={servicesRest} />
        </div>
      </div>
    </>
  )
}

export default TeamSuccess
