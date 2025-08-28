import { render } from '@redwoodjs/testing/web'

import ServiceListGrid from './ServiceListGrid'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ServiceListGrid', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServiceListGrid />)
    }).not.toThrow()
  })
})
