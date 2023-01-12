describe('Basic debugging for Aniview player', () => {
  it('Loads Aniview player', () => {
    cy.visit('https://tester-test.vudoo.io/vpaid-tester/index.php?tag=https%3A%2F%2Ftester-test.vudoo.io%2Fapi%2Fxml%2F14711701143%2Fp%2F&csrf=dD1MS9wM536jYEbS_55TpbMf10sbGUHyQWWC8-5UDtM&is_vertical=false&orientation=landscape&embed_id=14711701143')
    cy.frameLoaded()
    cy.contains("Test tag").click()
    cy.contains("Loading").should("be.visible")
    cy.get("#AVplayer0").should("exist")
 

  })
})