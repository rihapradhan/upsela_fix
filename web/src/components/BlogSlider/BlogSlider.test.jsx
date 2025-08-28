import { render } from '@redwoodjs/testing/web'

import BlogSlider from './BlogSlider'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BlogSlider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogSlider />)
    }).not.toThrow()
  })
})
