# Mis aprendizajes · Rutas del Eje

> Las pruebas automáticas dicen si tu código **funciona**. Este archivo muestra si **entiendes por qué funciona**.
> Responde con tus palabras, en 2 a 5 líneas por pregunta. No copies la documentación: explícala.
> En cada issue anota también **qué consultaste** (enlace) y **qué encontraste ahí**.
>
> Este archivo forma parte de la calificación del reto (criterio *Comprensión*).

**Aprendiz:** Santiago Vélez Valencia

---

## Issue #1 · G1 Guía de estilo

**Consulté:** [Variables CSS en MDN](https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties), [variables de Bootstrap](https://getbootstrap.com/docs/5.3/customize/css-variables/) y [WebAIM](https://webaim.org/resources/contrastchecker/). Aprendí que se puede usar `var()` para reutilizar colores y que Bootstrap tiene variables propias para cada botón.

1. **Variables CSS:** Me sirven para definir los colores una sola vez y mantener el mismo estilo. Si quiero cambiar el verde de la página, modifico una variable y se refleja en varios componentes.
2. **Color del botón:** El botón “Ver rutas” usa `--bs-btn-bg`, al que le asigné `var(--eje-primario)` en `.btn-primary`. No basta cambiar `--bs-primary`, porque el botón usa sus propias variables.
3. **Orden de CSS:** Mi archivo debe estar después de Bootstrap para que mis reglas puedan sobrescribir las de la librería. Si lo pongo antes, algunas personalizaciones pueden dejar de verse. Debo comprobarlo temporalmente en el navegador y devolver el archivo a su orden original.

---

## Issue #2 · G2 Componentes

**Consulté:** [Navbar Bootstrap](https://getbootstrap.com/docs/5.3/components/navbar/#responsive-behaviors), [Button group](https://getbootstrap.com/docs/5.3/components/button-group/) y [aria-pressed](https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA/Attributes/aria-pressed). Vi cómo Bootstrap usa atributos `data-bs-*` y cómo ARIA comunica el estado.

1. **Relación entre los atributos:** `data-bs-target="#menu"` apunta al elemento que tiene `id="menu"`. El JavaScript de Bootstrap lee ese atributo para abrir o cerrar el menú.
2. **Menú adaptable:** Al abrirlo `aria-expanded` debe pasar de `false` a `true`, y al cerrarlo vuelve a `false`. Sirve para que las personas que usan lector de pantalla sepan si está abierto. Esto se puede observar en DevTools.
3. **Valor de café:** Si uso `data-tipo="café"` con tilde, el filtro no encuentra coincidencias, porque en `datos.js` el tipo está guardado como `cafe` sin tilde.

---

## Issue #3 · G3 Datos → tarjetas

**Consulté:** [map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [join()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join), [plantillas literales](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals). Aprendí que `map()` genera un arreglo nuevo y `join('')` une sus elementos en un texto.

1. **Predicción y comprobación (expresiones para ejecutar en la consola):**

   | Línea | Mi predicción | Resultado esperado |
   |---|---|---|
   | 1 | [10, 20, 30] | [10, 20, 30] |
   | 2 | abc | abc |
   | 3 | a - b - c | a - b - c |
   | 4 | 11 | 11 |

2. **Sin join:** Al quitar `.join('')` aparecen comas entre las tarjetas, porque un arreglo convertido a texto usa comas como separadores. Con `join('')` se une el HTML sin separadores.
3. **Comillas invertidas:** Permiten construir un HTML de varias líneas y reemplazar datos con `${ruta.nombre}` o cualquier otra propiedad del objeto. Con comillas simples no se interpolan esos valores.

---

## Issue #4 · G4 Filtros y eventos

**Consulté:** [filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [includes()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes), [addEventListener()](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener) y [evento input](https://developer.mozilla.org/es/docs/Web/API/Element/input_event). Entendí cómo filtrar sin modificar los datos y escuchar lo que hace el usuario.

1. **Longitud original:** `rutas.length` sigue siendo 11 después de filtrar por café. `filter()` devuelve un arreglo nuevo con 2 rutas, pero no elimina nada del original.
2. **Clic en Cultura:** El evento `click` cambia `estado.tipo` a `cultura`. Luego `aplicarFiltros()` llama a `filtrarPorTipo()`, combina la búsqueda y `pintarRutas()` genera otra vez las tarjetas. También se actualizan `active` y `aria-pressed` del botón.
3. **Input y change:** El evento `input` busca mientras escribo. Con `change`, en un campo de texto normalmente tendría que terminar la edición o salir del campo para ver los cambios.

---

## Reto · Ordenar rutas

**Consulté:** _enlace(s)_ → _qué encontré_

1. **Explica:** ¿por qué `ordenarRutas` hace `const copia = [...lista]` antes de `sort()`? ¿Qué le pasaría a `rutas` si no se copia? ¿Qué prueba tuya lo demuestra?
   _Tu respuesta_

2. **Explica:** en `copia.sort((a, b) => a.precio - b.precio)`, ¿qué significa que la función devuelva un número negativo, cero o positivo?
   _Tu respuesta_

3. **Tus pruebas:** elige una de tus pruebas y explica qué error de programación detectaría si alguien dañara la función.
   _Tu respuesta_
