import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeoresById debe de retornatr un hèroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeoresById debe de retornatr undefine si no existe el ID', () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test('getHeroesByOwner debe de retornar arreglo de DC', () => {
    const owner = 'DC';
    const array = getHeroesByOwner(owner);
    const heros = [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ];

    expect(array.length).toBe(3);
    expect(array).toEqual(heros);
    expect(array).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  test('getHeroesByOwner debe de retornar arreglo de Marvel', () => {
    const owner = 'Marvel';
    const array = getHeroesByOwner(owner);
    const heros = [
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' },
    ];

    expect(array.length).toBe(2);
    expect(array).toEqual(heros);
    expect(array).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
