import chai from 'chai'
import counter from './counter.js'
import { INCREMENT, DECREMENT } from '../../actions/counter'

const expect = chai.expect

describe('counter reducer', () => {
  it('should have initial state', () => {
    expect(counter(undefined, {})).to.deep.equal({ count: 1 })
  })

  it('Should handle invalid action', () => {
    expect(counter(undefined, { type: 'SOME-INVALID-ACTION' })).to.deep.equal({ count: 1 })
  })

  it('Should INCREMENT count by 1', () => {
    const result = counter({ count: 10 }, { type: INCREMENT })
    expect(result.count).to.equal(11)
  })

  it('Should DECREMENT count by 1', () => {
    const result = counter({ count: -50 }, { type: DECREMENT })
    expect(result.count).to.equal(-51)
  })
})
