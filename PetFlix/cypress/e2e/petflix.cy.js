describe('Sistema da petFlix deve', () => {
    it('Exibir a home para escolher perfil', () => {
        cy.visit('http://localhost:5173/')
    })

    //perfil do dog
    
    it('clicar no profile do dog', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.cachorro-perfil').click();
    })
    it('selecionar o primeiro filme', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.cachorro-perfil').click();
        cy.get('[alt="cachorro Fofo1"]').eq(0).click();
    })
    it('Clicar na seta da direita', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.cachorro-perfil').click();
        cy.get(".fa-chevron-right").eq(0).click();
    })
    it('Funcionar o barulhinho', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.cachorro-perfil').click();
        cy.get(".content-body-filme-principal").eq(0).click();
    })
})