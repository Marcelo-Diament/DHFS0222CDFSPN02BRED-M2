const cinema = "CineMarco"

console.log(cinema)

const catalogo = [
  {
    codigo: 1,
    titulo: "O Poderoso Chefão",
    duracao: 2.91,
    atores: ["Al Pacino", "Marlon Brando", "Diane Keaton", "Robert De Niro"],
    anoDeLancamento: 1972,
    emCartaz: true
  },
  {
    codigo: 2,
    titulo: "O Mágico de Oz",
    duracao: 1.86,
    atores: ["Judy Garland", "Jack Haley", "Bert Lahr", "Frank Morgan"],
    anoDeLancamento: 1939,
    emCartaz: false
  }
]

const adicionarFilme = filme => catalogo.push(catalogo)
const testarAdicionarFilme = () => {
  console.log(`Antes da adição do novo filme ao catálogo, o catálogo possui ${catalogo.length} filmes.`)
  adicionarFilme({
      codigo: 3,
      titulo: "Cidadão Kane",
      duracao: 1.98,
      atores: ["Orson Welles", "Joseph Cotten", "Dorothy Comingore", "William Alland"],
      anoDeLancamento: 1941,
      emCartaz: false
  })
  console.log(`Após adição do novo filme ao catálogo, o catálogo possui ${catalogo.length} filmes.`)
}
// testarAdicionarFilme()