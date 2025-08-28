import { render } from '@redwoodjs/testing/web'

import CaseCarousel from './CaseCarousel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CaseCarousel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CaseCarousel />)
    }).not.toThrow()
  })
})
