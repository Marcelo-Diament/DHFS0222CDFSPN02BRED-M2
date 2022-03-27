const catalogo = require('./database/catalogo.json')

// const cinema = "CineMarco"
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

// Função de Apoio
const mostrarDetalhesFilme = filme => {
  const { titulo, codigo, anoDeLancamento, duracao, atores, emCartaz } = filme
  return `
    Título: ${titulo}
    Código: ${codigo}
    Ano: ${anoDeLancamento}
    Duração (hs): ${duracao}
    Atores: ${atores.join(', ')}
    Status: ${emCartaz ? "Em cartaz" : "Não está em cartaz"}
  `
}

const listarTodosOsFilmes = () => {
  catalogo.forEach(filme => console.log(mostrarDetalhesFilme(filme)))
}
const testarListarTodosOsFilmes = () => listarTodosOsFilmes()
// testarListarTodosOsFilmes()

const listarFilmesEmCartaz = () => {
  const filmesEmCartaz = catalogo.filter(filme => filme.emCartaz)
  for (let filme of filmesEmCartaz) {
    console.log(mostrarDetalhesFilme(filme))
  }
}
const testarListarFilmesEmCartaz = () => listarFilmesEmCartaz()
// testarListarFilmesEmCartaz()