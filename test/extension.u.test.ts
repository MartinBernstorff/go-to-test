import * as expect from 'expect';
/*
import { GoToTest, UserInterface } from '../src/extension';
import { mock } from 'ts-mockito';

class UIDouble implements UserInterface {
  info(message: string): void {
    console.log(message);
    throw new Error('Method not implemented.');
  }
}*/

describe('this is just a test of the test', () => {
  it('should pass', async () => {
    /*
    const ui: UserInterface = mock(UIDouble);
    const testSubject = new GoToTest(ui);
    // given();

    // when();

    await testSubject.executeCommand();
*/
    expect(true).toBe(true);
  });
});