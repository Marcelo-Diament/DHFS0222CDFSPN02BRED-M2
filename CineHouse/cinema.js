const catalogo = require('./database/catalogo.json')

const cinema = "CineMarco"
// console.log(cinema)

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

const buscarFilme = codigo => {
  for (let filme of catalogo) {
    if (filme.codigo === codigo) {
      console.log(`O filme de código ${codigo} se chama ${filme.titulo}`)
    }
  }
}
const testarBuscarFilme = () => {
  buscarFilme(1)
  buscarFilme(2)
}
// testarBuscarFilme()

const alterarStatusEmCartaz = codigo => {
  for (let filme of catalogo) {
    if (filme.codigo === codigo) {
      console.log(`Status do filme ${filme.titulo} (código ${codigo}) antes: ${filme.emCartaz}`)
      filme.emCartaz = !filme.emCartaz
      console.log(`Status do filme ${filme.titulo} (código ${codigo}) depois: ${filme.emCartaz}`)
    }
  }
}
const testarAlterarStatusEmCartaz = () => {
  alterarStatusEmCartaz(1)
  alterarStatusEmCartaz(2)
}
// testarAlterarStatusEmCartaz()

const listarTodosOsFilmes = () => {
  for (let filme of catalogo) {
    console.log(`
      Título: ${filme.titulo}
      Código: ${filme.codigo}
      Ano: ${filme.anoDeLancamento}
      Duração (hs): ${filme.duracao}
      Atores: ${filme.atores.join(', ')}
      Status: ${filme.emCartaz ? "Em cartaz" : "Não está em cartaz"}
    `)
  }
}
const testarListarTodosOsFilmes = () => listarTodosOsFilmes()
// testarListarTodosOsFilmes()

const listarFilmesEmCartaz = () => {
  for (let filme of catalogo) {
    if (filme.emCartaz) {
      console.log(`
        Título: ${filme.titulo}
        Código: ${filme.codigo}
        Ano: ${filme.anoDeLancamento}
        Duração (hs): ${filme.duracao}
        Atores: ${filme.atores.join(', ')}
        Status: ${filme.emCartaz ? "Em cartaz" : "Não está em cartaz"}
      `)
    }
  }
}
const testarListarFilmesEmCartaz = () => listarFilmesEmCartaz()
// testarListarFilmesEmCartaz()