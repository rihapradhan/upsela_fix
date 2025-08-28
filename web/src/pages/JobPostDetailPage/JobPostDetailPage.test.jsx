import { render } from '@redwoodjs/testing/web'

import JobPostDetailPage from './JobPostDetailPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JobPostDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobPostDetailPage />)
    }).not.toThrow()
  })
})
