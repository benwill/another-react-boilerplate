import chai from 'chai'
import spies from 'chai-spies'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Button from './button.js'

chai.use(spies)
const expect = chai.expect

function setup(text = 'Default') {
  const onClick = chai.spy()
  const component = TestUtils.renderIntoDocument(
    <Button buttonText={text} click={onClick} />
  )

  return {
    component, onClick, button: TestUtils.scryRenderedDOMComponentsWithTag(component, 'button')[0]
  }
}

describe('Button component', () => {
  it('should display default text', () => {
    const { button } = setup()
    expect(button.textContent).to.equal('Default')
  })

  it('should display text of: Primary', () => {
    const txt = 'Primary'
    const { button } = setup(txt)
    expect(button.textContent).to.equal(txt)
  })

  it('first button should call Click', () => {
    const { button, onClick } = setup()
    TestUtils.Simulate.click(button)
    expect(onClick).to.have.been.called()
  })
})
