import { render } from '@redwoodjs/testing/web'

import ServicesRest from './ServicesRest'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ServicesRest', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServicesRest />)
    }).not.toThrow()
  })
})
