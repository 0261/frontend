import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

beforeEach(() => {
  void cy.clearAllLocalStorage();
});

Then('광고 계정 목록창이 나타난다.', () => {})