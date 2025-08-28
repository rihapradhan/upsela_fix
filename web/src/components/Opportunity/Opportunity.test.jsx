import { render } from '@redwoodjs/testing/web'

import Opportunity from './Opportunity'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Opportunity', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Opportunity />)
    }).not.toThrow()
  })
})
