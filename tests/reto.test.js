/* Pruebas del reto: preparar, ejecutar y verificar el ordenamiento. */
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { rutas } = require('../js/datos.js');
const { ordenarRutas } = require('../js/app.js');

describe('RETO · ordenarRutas(lista, criterio)', () => {
  test('Ordena alfabéticamente los nombres incluyendo tildes', () => {
    const lista = [{ nombre: 'Zorro' }, { nombre: 'Árbol' }, { nombre: 'Bosque' }];
    const resultado = ordenarRutas(lista, 'nombre');
    assert.deepEqual(resultado.map((r) => r.nombre), ['Árbol', 'Bosque', 'Zorro']);
  });
  test('Ordena el precio de menor a mayor y deja gratis primero', () => {
    const resultado = ordenarRutas(rutas, 'precio');
    assert.equal(resultado[0].precio, 0);
    assert.ok(resultado.every((ruta, i) => i === 0 || resultado[i - 1].precio <= ruta.precio));
  });
  test('Ordena por duración de menor a mayor', () => {
    const resultado = ordenarRutas(rutas, 'duracion');
    assert.ok(resultado.every((ruta, i) => i === 0 || resultado[i - 1].duracionHoras <= ruta.duracionHoras));
  });
  test('No modifica el arreglo original', () => {
    const antes = rutas.map((r) => r.id);
    const resultado = ordenarRutas(rutas, 'nombre');
    assert.deepEqual(rutas.map((r) => r.id), antes);
    assert.notStrictEqual(resultado, rutas);
  });
  test('Un criterio desconocido devuelve una copia con el mismo orden', () => {
    const resultado = ordenarRutas(rutas, 'otro');
    assert.deepEqual(resultado, rutas);
    assert.notStrictEqual(resultado, rutas);
  });
  test('Una lista vacía se puede ordenar sin errores', () => {
    assert.deepEqual(ordenarRutas([], 'precio'), []);
  });
});
