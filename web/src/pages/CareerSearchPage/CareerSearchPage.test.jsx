import { render } from '@redwoodjs/testing/web'

import CareerSearchPage from './CareerSearchPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CareerSearchPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CareerSearchPage />)
    }).not.toThrow()
  })
})
