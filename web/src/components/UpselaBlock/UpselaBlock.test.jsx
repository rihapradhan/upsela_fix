import { render } from '@redwoodjs/testing/web'

import UpselaBlock from './UpselaBlock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpselaBlock', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpselaBlock />)
    }).not.toThrow()
  })
})
