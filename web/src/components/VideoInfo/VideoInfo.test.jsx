import { render } from '@redwoodjs/testing/web'

import VideoInfo from './VideoInfo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VideoInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VideoInfo />)
    }).not.toThrow()
  })
})
