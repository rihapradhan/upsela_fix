import { render } from '@redwoodjs/testing/web'

import RestLists from './RestLists'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RestLists', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RestLists />)
    }).not.toThrow()
  })
})
