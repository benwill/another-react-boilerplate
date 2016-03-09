import chai from 'chai'
import spies from 'chai-spies'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Counter from './counter.js'

chai.use(spies)
const expect = chai.expect

function setup(value = 0) {
  const actions = {
    onIncrement: chai.spy(),
    onDecrement: chai.spy()
  }
  const component = TestUtils.renderIntoDocument(
    <Counter value={value} {...actions} />
  )
  return {
    component,
    actions,
    buttons: TestUtils.scryRenderedDOMComponentsWithTag(component, 'button'),
    p: TestUtils.scryRenderedDOMComponentsWithTag(component, 'p')[0]
  }
}

describe('Counter component', () => {
  it('should display a count of 0', () => {
    const { p } = setup()
    expect(p.textContent).to.equal('Clicked: 0 times')
  })
  it('should display a count of 100', () => {
    const { p } = setup(100)
    expect(p.textContent).to.equal('Clicked: 100 times')
  })
  it('first button should call onIncrement', () => {
    const { buttons, actions } = setup()
    TestUtils.Simulate.click(buttons[0])
    expect(actions.onIncrement).to.have.been.called()
  })

  it('second button should call onDecrement', () => {
    const { buttons, actions } = setup()
    TestUtils.Simulate.click(buttons[1])
    expect(actions.onDecrement).to.have.been.called()
  })
  it('third button should not call onIncrement if the counter is even', () => {
    const { buttons, actions } = setup(42)
    TestUtils.Simulate.click(buttons[2])
    expect(actions.onIncrement).not.to.have.been.called()
  })
  it('third button should call onIncrement if the counter is odd', () => {
    const { buttons, actions } = setup(43)
    TestUtils.Simulate.click(buttons[2])
    expect(actions.onIncrement).to.have.been.called()
  })
  it('third button should call onIncrement if the counter is odd and negative', () => {
    const { buttons, actions } = setup(-43)
    TestUtils.Simulate.click(buttons[2])
    expect(actions.onIncrement).to.have.been.called()
  })
  it('fourth button should call onIncrement in a second', (done) => {
    const { buttons, actions } = setup()
    TestUtils.Simulate.click(buttons[3])
    setTimeout(() => {
      expect(actions.onIncrement).to.have.been.called()
      done()
    }, 1000)
  })
})
