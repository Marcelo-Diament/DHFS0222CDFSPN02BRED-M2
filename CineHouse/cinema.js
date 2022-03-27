const catalogo = require('./database/catalogo.json')

const cinema = "CineMarco"
// console.log(cinema)

const adicionarFilme = filme => catalogo.push(filme)
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
  let resultado = catalogo.filter(filme => filme.codigo == codigo)[0]
  console.log(resultado ? `O filme de código ${codigo} se chama ${resultado.titulo}` : `Não existe filme cujo código seja ${codigo}`)
  return resultado
}
const testarBuscarFilme = () => {
  buscarFilme(1)
  buscarFilme(2)
  buscarFilme(3)
}
// testarBuscarFilme()

const alterarStatusEmCartaz = codigo => {
  let resultado = buscarFilme(codigo)
  if (resultado && resultado.titulo) {
    let { titulo, emCartaz } = resultado
    console.log(`Status do filme ${titulo} (código ${codigo}) antes: ${emCartaz}`)
    emCartaz = !emCartaz
    console.log(`Status do filme ${titulo} (código ${codigo}) depois: ${emCartaz}`)
  }
  return resultado
}
const testarAlterarStatusEmCartaz = () => {
  alterarStatusEmCartaz(1)
  alterarStatusEmCartaz(2)
  alterarStatusEmCartaz(3)
}
// testarAlterarStatusEmCartaz()

const listarTodosOsFilmes = () => {
  const mostrarDetalhesFilme = filme => `
    Título: ${filme.titulo}
    Código: ${filme.codigo}
    Ano: ${filme.anoDeLancamento}
    Duração (hs): ${filme.duracao}
    Atores: ${filme.atores.join(', ')}
    Status: ${filme.emCartaz ? "Em cartaz" : "Não está em cartaz"}
  `
  catalogo.forEach(filme => console.log(mostrarDetalhesFilme(filme)))
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