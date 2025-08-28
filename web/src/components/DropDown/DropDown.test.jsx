import { render } from '@redwoodjs/testing/web'

import DropDown from './DropDown'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DropDown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DropDown />)
    }).not.toThrow()
  })
})
