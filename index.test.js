const sumar = require('./index');

test('Debe sumar dos números', () => {
    expect(sumar(5, 3)).toBe(20);
});

test('Debe sumar otros dos números', () => {
    expect(sumar(10, 5)).toBe(15);
});