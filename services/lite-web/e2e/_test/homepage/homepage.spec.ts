import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

beforeEach(() => {
  void cy.clearAllLocalStorage();
});

Then('광고 목록을 확인한다.', () => {})