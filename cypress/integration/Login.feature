Feature: Login site automationpractice
   
  Background: Acessar o site da automationpractice
   Given acesso o site automationpractice
   
   @testedois
   Scenario Outline: Realizar login com dados validos
    And informo <email> valido
    And informo <senha> valido
    When clico no botão de sign in
    Then devo visualizar mensagem de Welcome 

    Examples:
    | email                         | senha      |
    | ronaldo.oliveira@gmail.com   | Senha92020 |
            