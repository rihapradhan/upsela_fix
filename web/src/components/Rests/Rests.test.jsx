import { render } from '@redwoodjs/testing/web'

import Rests from './Rests'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Rests', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Rests />)
    }).not.toThrow()
  })
})
