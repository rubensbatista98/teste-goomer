# Teste da Goomer

Fiz este no projeto no intuito de praticar e aprender as tecnologias que usei para desenvolve-lo.

O projeto foi baseado em um teste para desenvolvedores front-end, feito pela empresa [Goomer](https://goomer.com.br/).

Encontrei o teste no repositório [frontend-challenges](https://github.com/felipefialho/frontend-challenges), criado pelo [Felipe Fialho](https://github.com/felipefialho).

[Link para o repositório do teste](https://github.com/goomerdev/job-dev-frontend-interview).

### Tecnologias utilizadas

- [ReactJS](https://pt-br.reactjs.org/)
- [Styled-Components](https://styled-components.com/)

## Objetivos

Consultar a [API](https://challange.goomer.com.br/restaurants) fornecida pela Goomer. Os dados retornados dessa API serão informações de restaurantes, como horários de funcionamento, uma imagem, nome e endereço dos restaurantes.

Com os dados recebidos e preciso criar uma página inicial, que exiba uma listagem dos restaurantes. Esta página obterar um formulário de busca, que irá servir para filtrar os restaurantes por nome, e terá a listagem dos restaurantes. Para cada restaurante, deve ser criado um card, contendo imagem, o nome e o endereço do restaurante, também deve ser informado no card se o restaurante está aberto ou fechado, e essa informação deve ser atualizada continuamente sem ser necessário reabrir ou renderizar a página novamente. E ao clicar no card do restaurante, o usuário deve ser redirecionado à uma página que contenha o cardápio do restaurante.

Na página de cardápio deverá ser feita outra consulta a API, para buscar o cardápio do restaurante. Os dados retornados serão informações dos items do cardápio, como imagem, nome, preço, grupo do cardápio em que o item se encaixa e promoções que serão válidas com base em horários informados em cada promoção.

Na página de cardápio, com os dados recebidos, deverá ser exibido um cabeçalho com imagem, nome e horários de funcionamento do restaurante, um formulário de busca, que servirá para filtrar os items do cardápio por nome e um accordion menu contendo os items do cardápio separados por grupos. Para cada item, deverá ser criado um card contendo imagem, nome e preço do item, e também deverá informa se há alguma promoção ativa com base no horário, se haver alguma promoção ativada, será necessário exbir o preço promocional e o nome da promoção, os estados das promoções deverão ser continuamente atualizados com base nos horários em que as promoções são validas, sem ser necesário reabrir ou renderizar a página.
