---
title: "Logica de programação: Programação geral na prática"
img: image/article/16/ola.jpg
header: "Logica de programação:<br> <strong>Programação geral na prática</strong>"
---

Com um breve entendimento de como uma máquina pode trabalhar com as informações descrito no artigo {% post_link como-as-maquinas-pensam %}, é necessário aprender como escrever os algoritmos que a máquina utilizará nos processos que ela deve realizar.

O primordial é entender como funciona uma referência de memória, utilizada para acessar um determinado espaço na memoria reservado para salvar informações, sendo um recurso que todo processamento complexo utiliza para manipular informações durante execução. Toda processo é uma sequencia de comandos que são acessos as referências, gravações nas referências, operações matemáticas, etc.

Uma referência de memória pode ter três tipos durante a execução do programa. Uma variável é uma referência de memória que pode ser acessada e gravada diversas vezes durante o processamento. Uma constante é uma referência que é gravada no inicio do processo e não será alterada até o final da execução. E o multi-dado é uma referência que agrupa um conjunto de posições em um contexto que funcionam igual variáveis.
<code>    variavel = 1; // referência igual a 1
    variavel = 2; // referência sobreesscrita para 2
    constante = 3.14; // Numero de PI (imutável)
    multidado = ['a','b','c']; // Conjunto de dados
</code>

As referências de memória possibilitam que outras estruturas utilizem esses dados para criar uma logica de processo. Uma verificação condicional realiza um teste que retorna verdadeiro ou falso. Caso o retorno sejá verdadeiro, uma sequencia de comandos será executada e o programa segura normalmente. Caso o retorno sejá falso, a sequencia não será executada e o programa segue para o próximo comando fora da condição.
<code>    variavel = 1;
    // Executado
    se (variavel <= 3) {
        // Executado
        // Executado
    }
    // Executado
    se (variavel == 0) {
        // Não executado
        // Não executado
    }
    // Executado
</code>

Um laço de repetição funciona basicamente como uma verificação condicional, uma sequencia de comandos será executada quando um teste retornar verdadeiro, mas o teste será realizado novamente depois do final desse sequencia. Logo, toda vez que o teste retornar verdadeiro a sequencia será executada novamente e só sairá do laço quando o teste retornar falso, com o programa seguindo após a sequencia determinada.
<code>    variavel = 1;
    // Executado
    enquanto (variavel <= 3) {
        // Executado (total 3 vezes)
        variavel = variavel + 1;
        // Executa o teste (variavel <= 3)
    }
    // Executado quando variavel for > 3
</code>

Essas são as estruturas basicas de qualquer linguagem utilizadas para escrever os algoritmos que as máquinas seguem. Porém, o que torna os programas algo tão util para a sociedade é a capacidade de responder as situações variáveis de entrada fornecidas por algo externo e devolver uma resposta após o processamento que comumente é um ser humano. Essa relação de humano-computador será melhor descrita em um proximo artigo.