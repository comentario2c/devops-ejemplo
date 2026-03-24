const suma = require('../app');
const { test, expect } = require('@jest/globals');

test('suma', () => {
  expect(suma(10, 30)).toBe('Hola Mundo');
});
