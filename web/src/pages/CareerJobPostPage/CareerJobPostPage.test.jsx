import { render } from '@redwoodjs/testing/web'

import CareerJobPostPage from './CareerJobPostPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CareerJobPostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CareerJobPostPage />)
    }).not.toThrow()
  })
})
