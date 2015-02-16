import MyLibrary from '../../src/index';

describe('A second file of tests', () => {
  beforeEach(() => {
    spy(MyLibrary, 'anotherFn');
    MyLibrary.anotherFn();
  });

  it('should have been run once', () => {
    expect(MyLibrary.anotherFn).to.have.been.calledOnce;
  });

  it('should have always returned hello', () => {
    expect(MyLibrary.anotherFn).to.have.always.returned('ok');
  });

  it('should of multiplied when asked', () => {
    expect(MyLibrary.multiply(6, 5)).to.equal(30);
  });
});
