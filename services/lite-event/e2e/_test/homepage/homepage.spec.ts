import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

beforeEach(() => {
  void cy.clearAllLocalStorage();
});

Then('에러 화면을 확인한다.', () => {}) 