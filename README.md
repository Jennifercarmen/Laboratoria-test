# getAllKeys

Escribir una función llamada "getAllKeys" que devuelve un array de todas las
claves del objeto de entrada.

Ejemplo de entrada:

```js
{
  name: 'Sam',
  age: 25,
  hasPets: true
}
```

Valor de retorno de la función (salida):

```js
['name', 'age', 'hasPets']
```

Tenga en cuenta que su función debe ser capaz de manejar cualquier objeto pasado
en ella.

P.ej.
también debe manejar una entrada como:

```js
{
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
}
```

Valor de retorno de la función (salida):

```js
['a', 'number', 'hungry', 'grammyWins']
```
## Environment

1. Installar `chai`
```
 npm i --save-dev chai
```
2. Installar `mocha`
```
npm i --save-dev mocha
```
3. Ejecutar `mocha`, al mismo nivel del directorio `test\`, o al test directamente `test\nombre-test.spec.js`

**Nota:** pueden agregar un archivo .gitignore para configurar los directorios y archivos que deben ser descartados por git para el control de versiones.

```
# npm debugging logs
npm-debug.log*

# project dependencies
node_modules

# files
package-lock.json

# OSX folder attributes
.DS_Store

# temporary files
*.tmp
*~
```