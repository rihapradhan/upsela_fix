import { render } from '@redwoodjs/testing/web'

import CaseStudyPostPage from './CaseStudyPostPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CaseStudyPostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CaseStudyPostPage />)
    }).not.toThrow()
  })
})
