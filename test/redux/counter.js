import expect from 'expect'
import counter from '../../src/redux/modules/counter.js'
import { INCREMENT, DECREMENT } from '../../src/actions/counter'


describe('counter reducer', () => {
  it('should have initial state', () => {
	  expect(
      counter(undefined, {})
    ).toEqual({
      count: 1
    });
  });	

  it('Should handle invalid action',  () => {
	  expect(
      counter(undefined, { type: 'SOME-INVALID-ACTION'})
    ).toEqual({
      count:1
    });
  });		
  
  it('Should INCREMENT count by 1',  () => {
    let result = counter({count: 10}, { type: INCREMENT });
    expect(result.count).toEqual(11);
  });	
  
  it('Should DECREMENT count by 1',  () => {
    let result = counter({count:-50}, { type: DECREMENT });
    expect(result.count).toEqual(-51);
  });	
});