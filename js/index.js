var form = document.querySelector(".card-form")

form.addEventListener("submit",function(event){
    event.preventDefault()
    $.ajax({
        // Link da requisição que será feita para a API
        url: "https://estagio.eficazmarketing.com/api/user",
        // O tipo da requisição
        type: "POST",
        // O JSON contendo as informações necessárias para realizar a requisição, se atenda que tem requisição que não precisa enviar JSON 
        data: {
            "seu_email": form.elements["email-pessoal"].value,
            "nome": form.elements["nome-c"].value,
            "email": form.elements["email"].value,
            "telefone": form.elements["telefone"].value,
            "rua": form.elements["rua"].value,
            "numero": form.elements["num"].value,
            "complemento": form.elements["complemento"].value,
            "bairro": form.elements["bairro"].value,
            "cidade": form.elements["cidade"].value,
            "uf": form.elements["uf"].value,
            "cep": form.elements["cep"].value
        }
    }).done(function(result) {
        alert(result.message)
    })
})