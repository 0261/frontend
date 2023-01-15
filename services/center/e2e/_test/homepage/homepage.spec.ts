import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

beforeEach(() => {
  void cy.clearAllLocalStorage();
});

Then('간편모드와 전문가모드 안내 섹션이 보인다.', () => {}) 