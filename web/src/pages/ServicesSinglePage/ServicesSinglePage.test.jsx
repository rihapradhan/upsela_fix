import { render } from '@redwoodjs/testing/web'

import ServicesSinglePage from './ServicesSinglePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ServicesSinglePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServicesSinglePage />)
    }).not.toThrow()
  })
})
