import { render } from '@redwoodjs/testing/web'

import WhyUpsela from './WhyUpsela'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WhyUpsela', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WhyUpsela />)
    }).not.toThrow()
  })
})
