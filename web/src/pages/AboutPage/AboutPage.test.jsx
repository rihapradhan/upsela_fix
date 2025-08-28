import { render } from '@redwoodjs/testing/web'

import { SharedDataProvider } from 'src/SharedDataProvider/SharedDataContext'

import AboutPage from './AboutPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AboutPage', () => {
  it('renders successfully', () => {
    const jsonData = {
      aboutData: { aboutTitle: '', para: '' },
      projectTeam: [],
      teamSucess: { title: '', para: '', img: '', servicesRest: [] },
      different: { aboutDifferent: { title: '', para: '' } },
      rests: { aboutRest: [] },
      AboutBanner: {},
      whyUpselaData: [],
      whyUpselaInfo: { para: '', title: '' },
      servicesMenu: [],
    }

    expect(() => {
      render(
        <SharedDataProvider jsonData={jsonData}>
          <AboutPage />
        </SharedDataProvider>
      )
    }).not.toThrow()
  })
})
