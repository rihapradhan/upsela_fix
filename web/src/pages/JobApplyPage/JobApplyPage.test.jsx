import { render } from '@redwoodjs/testing/web'

import JobApplyPage from './JobApplyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JobApplyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobApplyPage />)
    }).not.toThrow()
  })
})
