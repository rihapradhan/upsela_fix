import { render } from '@redwoodjs/testing/web'

import ServiceItem from './ServiceItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ServiceItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServiceItem />)
    }).not.toThrow()
  })
})
