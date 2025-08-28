import { render } from '@redwoodjs/testing/web'

import JobSearchItem from './JobSearchItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JobSearchItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobSearchItem />)
    }).not.toThrow()
  })
})
