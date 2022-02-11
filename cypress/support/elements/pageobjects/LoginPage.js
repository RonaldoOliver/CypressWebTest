/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    
    
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Informa email no input do email
    informarEmail(email) {
        cy.get(loginElements.inputEmail()).type(email)
    }

     // Informa senha no input da senha
     informarSenha(senha) {
        cy.get(loginElements.inputSenha()).type(senha)
    }
    
    // Clica no botão de realizar login
    clicarBotaoRealizarLogin() {
        cy.get(loginElements.botaoRealizarLogin()).click()
    }

    // Visualizar mensagem de Welcome"
    visualizarWelcomeLogin() {
        cy.get(loginElements.mensagem()).should('contain', 'Welcome to your account. Here you can manage all of your personal information and orders.')
    }
    
}

export default LoginPage;
