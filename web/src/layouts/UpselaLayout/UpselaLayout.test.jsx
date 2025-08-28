import { render } from '@redwoodjs/testing/web'

import UpselaLayout from './UpselaLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UpselaLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpselaLayout />)
    }).not.toThrow()
  })
})
