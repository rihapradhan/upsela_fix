import { render } from '@redwoodjs/testing/web'

import ValidationPage from './ValidationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ValidationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ValidationPage />)
    }).not.toThrow()
  })
})
