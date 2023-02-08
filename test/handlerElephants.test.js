const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verificando se é uma função', () => {
    expect(typeof handlerElephants()).toBe('undefined');
  });
  it('Retorna undefined se não receber parametro', () => {
    expect(handlerElephants(undefined)).toBeUndefined();
  });
  it('Verificando a contagem', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verficando se retorna um nome de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verficiando a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verificando a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Verificando a disponibilidade de visita dos elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Localização elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Parametro inválido!', () => {
    expect(typeof handlerElephants(1)).toBe('string');
  });
  it('Teste final se a string passada for diferente do esperado', () => {
    expect(handlerElephants('choice')).toBe(null);
  });
});
