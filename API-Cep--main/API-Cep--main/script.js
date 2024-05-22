function consultaCEP(cep) {

 cep = cep.replace(/\D/g,''); //expressão regular ->regex

 if (cep !="") {

    const padraoCep = /^[0-9]{8}$/; //regex

    if(padraoCep.test(cep)){

        document.querySelector('#bairro').setAttribute('readonly','')
        document.querySelector('#cidade').setAttribute('readonly','')
        document.querySelector('#uf').setAttribute('readonly','')

        const requisicao = new Request(`https://viacep.com.br/ws/${cep}/json` , {
            "method": "GET",
            "headers": {
                "Content-type": "aplication/json" 
    }
   });  

fetch (requisicao)
    .then(resposta => resposta.json())
    .then(resposta => {
        
    if(!("erro" in resposta)){

    document.querySelector('#logradouro').value = resposta.logradouro;
    document.querySelector('#bairro').value = resposta.bairro;
    document.querySelector('#cidade').value = resposta.localidade;
    document.querySelector('#uf').value = resposta.uf;
   
} else {
    limpaForm();
    window.alert('Cep não localizado!');

    document.querySelector('#bairro').removeAttribute('readonly');
    document.querySelector('#cidade').removeAttribute('readonly');
    document.querySelector('#uf').removeAttribute('readonly');
      }
    });

} else {//caso esteja fora do padrão

limpaForm();
window.alert('O formato do CEP é invalido!');

}   

 } else{ //caso o Cep esteja vazio
       limpaForm();
       window.alert('Digite um CEP');
 }

}//Fecha a função
function limpaForm() {

 document.querySelectorAll('input:not(#cep)').forEach(input =>{
    input.value = '';   
})

}

const botao = document.getElementById('button');

botao.addEventListener('click', function() {
  // Código a ser executado quando o botão for clicado
  alert('O botão foi clicado!');
});

