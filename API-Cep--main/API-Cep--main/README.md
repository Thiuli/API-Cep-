# API-Cep-
Projeto consumo de API de CEP do VIACEP.

##ApIs

As APIs possuem alguns elementos que servem á sua utilização:

-**Ponto de entrada**: è o endereço do serviço hospedado e que pode ser acessado através de um navegador ou uma ferramenta de consumo de APIs. Exemplo: <https://dadosabertos.camara.leg.br/api/v2>

-**Recursos**: São os serviços de dados disponíveis para consumo. Exemplo:<https://dadosabertos.camara.leg.br/api/v2/deputados>

-**Parametros**: São informações ou filtros que servem para enviar dados da consiltaou para serem processados para a API.  Os parÂmetros podem ser passados para a API através da URL ou no corpo (body) da requisição. Exemplo:<https://dadosabertos.camara.leg.br/api/v2/deputados?nome=tiririca>

-**Métodos**: São as formas de consumoo de uma API, que podem ser:
-_POST_: inserção de dados (**C** REATE)
-_GET_: obtençâo de dados (**r**EAD) 
-_PUT_: E _PATCH_: atualizaçâo (**u**PDATE)
-_DELETE_: remoçâo de dados (**D**ELETE) 