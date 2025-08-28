import { render } from '@redwoodjs/testing/web'

import ProjectTeam from './ProjectTeam'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProjectTeam', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectTeam />)
    }).not.toThrow()
  })
})
