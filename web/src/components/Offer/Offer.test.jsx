import { render } from '@redwoodjs/testing/web'

import Offer from './Offer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Offer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Offer />)
    }).not.toThrow()
  })
})
