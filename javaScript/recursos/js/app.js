 //getElementById serve para chamar buscar a funçao id no html//
 
 let cabecalho = document.getElementById("cabecalho")

//console escreve a informação pedida no console do browser//
	console.log(cabecalho)

//function serve para pegar os dados//
function pegarDadosDoAluno(){
	
	const nome = document.getElementById("nome")
	console.log(nome.value)
	
	return nome.value
	
	const nota1 = document.getElementById("nota1")
	console.log(nota1.value)
	
	const nota2 = document.getElementById("nota2")
	console.log(nota2.value)
	
	const nota3 = document.getElementById("nota3")
	console.log(nota3.value)
	
	const nota4 = document.getElementById("nota4")
	console.log(nota4.value)
	
	}
 let pegarDado = pegarDadosDoAluno()
  console.log("Nome",pegarDado)