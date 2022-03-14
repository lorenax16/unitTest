const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
      expect(typeof productDetails).toBe('function')
    // Teste se o retorno da função é um array.
    //https://jest-bot.github.io/jest/docs/expect.html#expectarraycontainingarray
      expect(productDetails()).toEqual(expect.arrayContaining([]));
    // Teste se o array retornado pela função contém dois itens dentro.
    //.toHaveLength(number) # Use .toHaveLengthpara verificar se um objeto possui uma .lengthpropriedade e está definido para um determinado valor numérico.Isso é especialmente útil para verificar o tamanho de arrays ou strings.
      expect(productDetails()).toHaveLength(2)
   // Teste se os dois itens dentro do array retornado pela função são objetos.
      expect(typeof productDetails()[0]).toBe('object');
      expect(typeof productDetails()[1]).toBe('object');
   // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
      expect(productDetails('pimerParametro','segundoParametro')[0]).not.toMatchObject(productDetails('primerParametro', 'segundoParametr0')[1]);
   // Teste se os dois productIds terminam com 123.
      expect(productDetails('firstProduct')[0].details.productId).toBe('firstProduct123');
      expect(productDetails('','secondProduct')[1].details.productId).toBe('secondProduct123');
  });
});
