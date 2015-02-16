import Another from './another';

const MyLibrary = {
  anotherFn: Another.anotherFn,
  multiply: Another.multiply,
  mainFn() {
    return 'hello';
  }
};

export default MyLibrary;
