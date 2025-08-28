import { render } from '@redwoodjs/testing/web'

import VerticalTab from './VerticalTab'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VerticalTab', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VerticalTab />)
    }).not.toThrow()
  })
})
