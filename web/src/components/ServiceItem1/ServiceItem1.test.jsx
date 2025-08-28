import { render } from '@redwoodjs/testing/web'

import ServiceItem1 from './ServiceItem1'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ServiceItem1', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServiceItem1 />)
    }).not.toThrow()
  })
})
