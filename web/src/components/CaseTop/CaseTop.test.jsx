import { render } from '@redwoodjs/testing/web'

import CaseTop from './CaseTop'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CaseTop', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CaseTop />)
    }).not.toThrow()
  })
})
