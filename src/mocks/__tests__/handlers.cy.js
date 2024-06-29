import { verifyCpf } from '../handlers.js';

const cpf = '111.222.333-55';
const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

describe('handler', () => {
  it('validate size cpf', () => {
    cy.wrap(cpf).should('match', regex);

  })
  it('validate cpf', () => {
    cy.wrap(cpf).should('satisfy', elem => verifyCpf(elem))

  })
})