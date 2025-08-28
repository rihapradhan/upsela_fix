import { render } from '@redwoodjs/testing/web'

import SocialShare from './SocialShare'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SocialShare', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SocialShare />)
    }).not.toThrow()
  })
})
