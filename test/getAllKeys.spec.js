const Assert = require('chai').assert;
const getAllKeys = require('../solution/getAllKeys');

describe('getAllKeys()', function () {
  it("debería regresar ['tes', 'ini', 'berhasil'], para { tes : 'tes', ini : 'apa',berhasil : 10 }", function () {
    var hasil = ['tes', 'ini', 'berhasil'];
    var obj = {
      tes: 'tes',
      ini: 'apa',
      berhasil: 10
    };

    Assert.deepEqual(getAllKeys(obj), hasil);
  });

  it("debería regresar ['a', 'number', 'hungry', 'grammyWins'], para { a: 'a', number: 11, hungry: true, grammyWins: 1 }", function () {
    var hasil = ['a', 'number', 'hungry', 'grammyWins'];
    var obj = {
      a: 'a',
      number: 11,
      hungry: true,
      grammyWins: 1
    };

    Assert.deepEqual(getAllKeys(obj), hasil);
  });
});
