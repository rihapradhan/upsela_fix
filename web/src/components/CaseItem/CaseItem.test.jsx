import { render } from '@redwoodjs/testing/web'

import CaseItem from './CaseItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CaseItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CaseItem />)
    }).not.toThrow()
  })
})
