import { render } from '@redwoodjs/testing/web'

import Different from './Different'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Different', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Different />)
    }).not.toThrow()
  })
})
