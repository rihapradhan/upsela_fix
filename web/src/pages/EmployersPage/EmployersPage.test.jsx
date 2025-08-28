import { render } from '@redwoodjs/testing/web'

import EmployersPage from './EmployersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EmployersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmployersPage />)
    }).not.toThrow()
  })
})
