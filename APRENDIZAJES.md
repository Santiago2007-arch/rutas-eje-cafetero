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

**Consulté:** _enlace(s)_ → _qué encontré_

1. **Explica:** ¿qué relación hay entre `data-bs-target="#menu"` en el botón y el `id="menu"` del div? ¿Quién lee ese atributo?
   _Tu respuesta_

2. **Experimenta:** abre y cierra el menú en un ancho de celular y observa en DevTools el atributo `aria-expanded` del botón. ¿Qué pasa con su valor? ¿Para quién es útil esa información?
   _Tu respuesta_

3. **¿Qué pasaría si…** en un botón de filtro escribes `data-tipo="café"` (con tilde)? Piensa en lo que hay en `datos.js` antes de responder.
   _Tu respuesta_

---

## Issue #3 · G3 Datos → tarjetas

**Consulté:** _enlace(s)_ → _qué encontré_

1. **Predice y comprueba:** antes de ejecutarlas en la consola del navegador, escribe qué crees que devuelve cada línea. Después ejecútalas y anota el resultado real.
   ```js
   [1, 2, 3].map((n) => n * 10)
   ['a', 'b', 'c'].join('')
   ['a', 'b', 'c'].join(' - ')
   rutas.map((r) => r.nombre).length
   ```
   | Línea | Mi predicción | Resultado real |
   |---|---|---|
   | 1 | | |
   | 2 | | |
   | 3 | | |
   | 4 | | |

2. **Experimenta y explica:** quita temporalmente `.join('')` de `pintarRutas`. ¿Qué aparece entre las tarjetas y por qué? (Pista: ¿qué hace `innerHTML` cuando le asignas un arreglo?). Vuelve a ponerlo.
   _Tu respuesta_

3. **Explica:** ¿por qué la tarjeta se escribe con comillas invertidas `` ` `` y no con comillas simples `' '`? ¿Qué hace `${ }`?
   _Tu respuesta_

---

## Issue #4 · G4 Filtros y eventos

**Consulté:** _enlace(s)_ → _qué encontré_

1. **Predice y comprueba:** después de ejecutar `filtrarPorTipo(rutas, 'cafe')` en la consola, ¿cuánto vale `rutas.length`? ¿Por qué?
   _Tu respuesta_

2. **Explica el recorrido:** describe paso a paso qué pasa desde que la persona hace clic en el botón "Cultura" hasta que aparecen las tarjetas nuevas. Menciona: el evento, `estado`, `aplicarFiltros()`, `filtrarPorTipo()` y `pintarRutas()`.
   _Tu respuesta_

3. **¿Qué pasaría si…** usas el evento `'change'` en lugar de `'input'` en el buscador? Pruébalo y describe la diferencia.
   _Tu respuesta_

---

## Reto · Ordenar rutas

**Consulté:** _enlace(s)_ → _qué encontré_

1. **Explica:** ¿por qué `ordenarRutas` hace `const copia = [...lista]` antes de `sort()`? ¿Qué le pasaría a `rutas` si no se copia? ¿Qué prueba tuya lo demuestra?
   _Tu respuesta_

2. **Explica:** en `copia.sort((a, b) => a.precio - b.precio)`, ¿qué significa que la función devuelva un número negativo, cero o positivo?
   _Tu respuesta_

3. **Tus pruebas:** elige una de tus pruebas y explica qué error de programación detectaría si alguien dañara la función.
   _Tu respuesta_
