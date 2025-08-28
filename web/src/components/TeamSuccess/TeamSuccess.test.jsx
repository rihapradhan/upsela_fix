import { render } from '@redwoodjs/testing/web'

import TeamSuccess from './TeamSuccess'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeamSuccess', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeamSuccess />)
    }).not.toThrow()
  })
})
