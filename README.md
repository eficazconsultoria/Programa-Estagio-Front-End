# Programa de Estágio Eficaz

Este projeto apresenta como pode ser realizado o teste do programa de estágio da Eficaz.

Para rodar o projeto, você pode fazer o download do projeto que esta compactado [https://codeload.github.com/RafaelMacedoEficaz/programa-estagio-front-end/zip/main] ou clonar o repositório em seu computador usando o comando

```
git clone https://github.com/RafaelMacedoEficaz/programa-estagio-front-end.git
```

Para rodar o projeto, apenas abra o arquivo index.html no seu navergador.

Este projeto contém a tela inicial e a tela de Listar Usuários Cadastrados.

No arquivo listacadastrado.html você verá a tela de Listagem dos Usuários Cadastrados, que é relacioando a 3ª Etapa do teste.

# Framework Boostrap

Este projeto foi desenvolvindo usando o framework Boostrap [https://getbootstrap.com/] e sua documentação pode ser acesso no link [https://getbootstrap.com/docs/5.0/getting-started/introduction/] 

# Biblioteca JQuery

biblioteca JQuery [https://jquery.com/] e sua documentação [https://api.jquery.com/]


Na tela de listar os usuários cadastrados, você poderá ver como é feito a integraço e requisição a API para pegar todos os usuários cadastrados.

Para lhe ajudar, abaixo estão todos os caminhos para fazer requisição a API.


> Consultar todos os usuários cadastrados

Tipo de requisição GET
https://estagio.eficazmarketing.com/api/user

> Consultar um usuário especifíco para usar no evento do botão Editar

Tipo de requisição GET
https://estagio.eficazmarketing.com/api/user/{id do usuário}

> Cadastrar um novo usuário na tela de Cadastro

Tipo de requisiçãoo POST
https://estagio.eficazmarketing.com/api/user

Esta requisição é necessário enviar as informações no formato JSON

```
{
  "seu_email": "estagiarioa@gmail.br",
  "nome": "Estagiario",
  "email": "vagas@eficazconsultoria.net.br",
  "telefone": "(14) 12345-1234",
  "rua": "Av. Higino Muzi Filho",
  "numero": "529",
  "complemento": "",
  "bairro": "Mirante",
  "cidade": "Marília",
  "uf": "SP",
  "cep": "17525-901"
}
```

> Alterar as informações de usuário na tela de Cadastro

Tipo de requisição PUT
https://estagio.eficazmarketing.com/api/user/{id do usuário}

Esta requisição também é necessário enviar as informações no formato JSON

```
{
  "seu_email": "estagiarioa@gmail.br",
  "nome": "Estagiario",
  "email": "vagas@eficazconsultoria.net.br",
  "telefone": "(14) 12345-1234",
  "rua": "Av. Higino Muzi Filho",
  "numero": "529",
  "complemento": "",
  "bairro": "Mirante",
  "cidade": "Marília",
  "uf": "SP",
  "cep": "17525-901"
}
```

> Deletar as informações de um usuário específico

Tipo de requisição Delete
https://estagio.eficazmarketing.com/api/user/{id do usuário}


# JQuery

Um pouco sobre Ajax que pode ser utilizado para fazer a integração com a API do programa de estágio da Eficaz

A documentação sobre o Ajax do JQuery você pode acessar pelo link [https://api.jquery.com/jQuery.ajax/]

Para fazer as requisições a API do programa de estágio da Eficaz, você pode usar como exemplo o código que esta no arquivo listacadastrado.html na linha 57.

Um ajax é formado pelo link da requisição, o tipo da requisição e as informações que será passada pela requisição, abaixo você pode ver um exemplo de como é feito uma requisição POST.

```
$.ajax({
      // Link da requisição que será feita para a API
      url: "https://estagio.eficazmarketing.com/api/user",
      // O tipo da requisição
      type: "POST",
      // O JSON contendo as informações necessárias para realizar a requisição, se atenda que tem requisição que não precisa enviar JSON 
      data: [
          "seu_email": "estagiarioa@gmail.br",
          "nome": "Estagiario",
          "email": "vagas@eficazconsultoria.net.br",
          "telefone": "(14) 12345-1234",
          "rua": "Av. Higino Muzi Filho",
          "numero": "529",
          "complemento": "",
          "bairro": "Mirante",
          "cidade": "Marília",
          "uf": "SP",
          "cep": "17525-901"
      ]
  }).done(function(result) {
      // Nesta parte é o retorno da requisição, nela pode ser verificado se ocorreu tudo certo na requisição ou se ocorreu um erro.
  });
```

