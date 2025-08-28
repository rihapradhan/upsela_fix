import { render } from '@redwoodjs/testing/web'

import Fundamental from './Fundamental'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Fundamental', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Fundamental />)
    }).not.toThrow()
  })
})
