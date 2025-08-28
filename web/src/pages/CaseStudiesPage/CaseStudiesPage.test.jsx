import { render } from '@redwoodjs/testing/web'

import CaseStudiesPage from './CaseStudiesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CaseStudiesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CaseStudiesPage />)
    }).not.toThrow()
  })
})
