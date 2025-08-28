import { render } from '@redwoodjs/testing/web'

import CareerPartner from './CareerPartner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CareerPartner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CareerPartner />)
    }).not.toThrow()
  })
})
