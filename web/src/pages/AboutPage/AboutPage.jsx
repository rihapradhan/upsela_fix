import { MetaTags } from '@redwoodjs/web'

import AboutInfo from 'src/components/AboutInfo/AboutInfo'
import Banner from 'src/components/Banner/Banner'
import Button from 'src/components/Button/Button'
import Different from 'src/components/Different/Different'
import Footer from 'src/components/Footer/Footer'
import Fundamental from 'src/components/Fundamental/Fundamental'
import Header from 'src/components/Header/Header'
import ProjectTeam from 'src/components/ProjectTeam/ProjectTeam'
import Rests from 'src/components/Rests/Rests'
import Team from 'src/components/Team/Team'
import TeamSuccess from 'src/components/TeamSuccess/TeamSuccess'
import WhyUpsela from 'src/components/WhyUpsela/WhyUpsela'
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

const AboutPage = (props) => {
  const { jsonData } = useSharedData()

  const aboutData = jsonData.aboutData
  const projectTeam = jsonData.projectTeam
  const teamSucess = jsonData.teamSucess
  const different = jsonData.different
  const aboutRest = jsonData.rests.aboutRest

  return (
    <>
      <MetaTags title="About" description="About page" />
      {/* <div className="inside-header">
        <Header  />
      </div> */}
      {/* <Banner /> */}
      <Banner
        videoUrl="/images/aboutus-header.mp4"
        bannerData={jsonData.AboutBanner}
      />
      <AboutInfo aboutData={aboutData} btn={false} />
      <WhyUpsela />
      <div className="main about-pg">
        {/* <div className="projects p-t-60">
          <div className="container">
            <div className="projects-list">
              {projectTeam.map((item, index) => {
                return <ProjectTeam key={index} projectTeam={item} />
              })}
            </div>
          </div>
        </div> */}

        <TeamSuccess teamSucess={teamSucess} />

        <Different different={different.aboutDifferent} para={true} />

        {/* <Rests rests={aboutRest} textCenter={true} /> */}

        {/* <Team /> */}

        {/* <Fundamental /> */}
        <Footer />
      </div>
    </>
  )
}

export default AboutPage
