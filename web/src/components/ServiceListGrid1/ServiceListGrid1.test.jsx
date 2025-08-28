import { render } from '@redwoodjs/testing/web'

import ServiceListGrid1 from './ServiceListGrid1'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ServiceListGrid1', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServiceListGrid1 />)
    }).not.toThrow()
  })
})
