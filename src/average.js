/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
/* nina me ajudo na aplicaçao da logica https://github.com/tryber/sd-020-a-project-js-unit-tests/pull/42/files para achar a media do array temos que somar todos os elementos e dividir pela quantidade de elementos do array media de um array nesse site: https://www.delftstack.com/es/howto/javascript/javascript-average-function/#hacer-una-funci%C3%B3n-para-calcular-el-promedio-de-un-array-usando-un-bucle-en-javascript
para somar todos os elementos devemos fazer um for para passar por cada posiçao do array e almacenar na variavel contadora para somar os valores do elemento
usamos o if para validar se o array é 0 que quer dizer que esta vazio e retorna undefined assumindo que vazio e que não tem propriedades https://www.delftstack.com/es/howto/javascript/javascript-average-function/#hacer-una-funci%C3%B3n-para-calcular-el-promedio-de-un-array-usando-un-bucle-en-javascrip
*/
const average = (array) => {
  let cont = 0;
  let result;  
  if (array.length === 0) {
    return undefined;
  } 
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {
      return undefined;
    }
    cont += array[i];
    result = Math.round(cont / array.length);
  }
  return result;
};
console.log(average('hola'));
module.exports = average;