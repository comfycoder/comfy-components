import { MyPercentPipe } from './my-percent.pipe';

describe('MyPercentPipe', () => {
  it('create an instance', () => {
    const pipe = new MyPercentPipe();
    expect(pipe).toBeTruthy();
  });
});
