import { render } from '@redwoodjs/testing/web'

import Team from './Team'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Team', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Team />)
    }).not.toThrow()
  })
})
