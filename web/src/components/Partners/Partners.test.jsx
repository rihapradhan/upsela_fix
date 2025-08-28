import { render } from '@redwoodjs/testing/web'

import Partners from './Partners'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Partners', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Partners />)
    }).not.toThrow()
  })
})
