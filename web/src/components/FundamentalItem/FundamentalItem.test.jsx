import { render } from '@redwoodjs/testing/web'

import FundamentalItem from './FundamentalItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FundamentalItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FundamentalItem />)
    }).not.toThrow()
  })
})
