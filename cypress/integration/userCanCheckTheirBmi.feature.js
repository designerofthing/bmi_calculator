describe('User can check their Bmi', ()=> {
    it ('User can enter their weight and height',() => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
    })
})
