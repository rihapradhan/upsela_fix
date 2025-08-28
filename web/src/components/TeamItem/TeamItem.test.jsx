import { render } from '@redwoodjs/testing/web'

import TeamItem from './TeamItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeamItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeamItem />)
    }).not.toThrow()
  })
})
