programa
{
	
	funcao inicio()
	{
		inteiro contador, limite, tabuada, resultado

		escreva("Qual tabuada você quer resolver:")
		leia(tabuada)
		contador = 0
		escreva("Qual o limite da tabuada você quer  resolver:")
		leia(limite)
		faca
		{
			resultado = tabuada * contador
			escreva (tabuada + " X " + contador + " = " + resultado + "\n")
			contador ++
		} enquanto (contador <= limite)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 292; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */