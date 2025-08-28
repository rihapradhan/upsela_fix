import { render } from '@redwoodjs/testing/web'

import BlogItem from './BlogItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BlogItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogItem />)
    }).not.toThrow()
  })
})
