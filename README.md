# tzu-primer-proyecto

Integrantes del equipo:

[Brahian Pereyra](https://github.com/brahianpdev) <br>
[Pablo Gutierrez](https://github.com/Xch4rt)

Tarea a resolver:
```
Crear una API que cumpla con:
- peticion get
- peticion get:id
- limitar resultados por busqueda (querys)
- busqueda por string (querys)
```

Para correr el proyecto:
```
1- Fork
2- npm init
3- nodemon index.js

Deberias ver 'Listening at port: { PORT }
```

## Como funciona la api?

Como bien sabemos, estaremos utilizando la api de pokemon [PokeApi](https://pokeapi.co)
<br>
### Algunos de sus Endpoints son:

* Berries
  1. Berries
  2. Berry Firmness
  3. Berry Flavors
* Evolution
  1. Evolution Chain
  2. Evolution Triggers
* Pokemon
  1. Abilities
  2. Characteristics
  3. Genders
  4. Pokemon
  5. Pokemon Colors
  6. Pokeathlon Stats
  7. Pokemon Forms
  8. Pokemon Habitats
  9. Stats
  10. Types
<br>

### Ejemplos de uso:
<br>

```
const searchPokemon = async(pokemon) => { 
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const res = await fetch(url);
    const data = await res.json();
    
    return data;
}
```
Lo que nos devolvera esta funcion seran datos como:

<details><summary>abilities:</summary>
  &nbsp;&nbsp;&nbsp;&nbsp;Contiene informacion acerca de la habilidad del pokemon
</details>
base_experience : 112 <br>
<details><summary>game_indices:</summary>
&nbsp;&nbsp;&nbsp;&nbsp;Contiene informacion acerca de las generaciones
</details>
height : 4 <br>
id : 4 <br>
is_default : true <br>
location_area_encounters : "https://pokeapi.co/api/v2/pokemon/25/encounters" <br>
name : "pikachu" <br>
order : 35 <br>
<details><summary>species:</summary>
&nbsp;&nbsp;&nbsp;&nbsp;Contiene informacion acerca del tipo de especie
</details>
<details><summary>stats:</summary>
&nbsp;&nbsp;&nbsp;&nbsp;Contiene informacion acerca de las estadisticas
</details>
<details><summary>types:</summary>
&nbsp;&nbsp;&nbsp;&nbsp;Contiene informacion acerca del tipo de Pokemon
</details>
weight : 60

