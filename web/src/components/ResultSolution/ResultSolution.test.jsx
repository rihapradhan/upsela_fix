import { render } from '@redwoodjs/testing/web'

import ResultSolution from './ResultSolution'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ResultSolution', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResultSolution />)
    }).not.toThrow()
  })
})
