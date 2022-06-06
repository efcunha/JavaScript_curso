programa
{
	
	funcao inicio()
	{
		real janeiro,fevereiro,marco,abril,media,total
		cadeia vendedor

		escreva("digite o nome do vendedor: ")
		leia(vendedor)
		
		escreva("Digite a venda janeiro: ")
		leia(janeiro)
		escreva("Digite a venda fevereiro: ")
		leia(fevereiro)
		escreva("Digite a venda marco: ")
		leia(marco)
		escreva("Digite a venda abril: ")
		leia(abril)

		total = (janeiro+fevereiro+marco+abril)
          escreva("Total de Vendas: " + total)
		media = (janeiro+fevereiro+marco+abril)/4
		escreva("O vendedor: " + vendedor + " Atingiu a média: " + media)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 512; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */