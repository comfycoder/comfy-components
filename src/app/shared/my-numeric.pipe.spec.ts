import { MyNumericPipe } from './my-numeric.pipe';

describe('MyNumericPipe', () => {
  it('create an instance', () => {
    const pipe = new MyNumericPipe();
    expect(pipe).toBeTruthy();
  });
});
