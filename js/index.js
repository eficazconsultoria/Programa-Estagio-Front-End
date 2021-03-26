var form = document.querySelector(".card-form")
form.addEventListener("click", function(event){ 
    event.preventDefault()
    console.log(event)
    jQuery.ajax({
        // Link da requisição que será feita para a API
        url: "https://estagio.eficazmarketing.com/api/user",
        // O tipo da requisição
        type: "POST",
        // O JSON contendo as informações necessárias para realizar a requisição, se atenda que tem requisição que não precisa enviar JSON 
        data: {
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
    }).done(function(result) {
        // Nesta parte é o retorno da requisição, nela pode ser verificado se ocorreu tudo certo na requisição ou se ocorreu um erro.
    });
} )