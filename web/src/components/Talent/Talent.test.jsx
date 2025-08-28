import { render } from '@redwoodjs/testing/web'

import Talent from './Talent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Talent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Talent />)
    }).not.toThrow()
  })
})
