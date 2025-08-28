import { render } from '@redwoodjs/testing/web'

import CaseStudy from './CaseStudy'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CaseStudy', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CaseStudy />)
    }).not.toThrow()
  })
})
