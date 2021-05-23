describe('Pokedex', function () {
  it('front page can be opened', function () {
    const PORT = process.env.PORT || 5000
    cy.visit(`http://localhost:${PORT}`)
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
})
