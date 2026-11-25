# Rutas del Eje

Catálogo de rutas turísticas del Eje Cafetero (Caldas, Risaralda y Quindío).
Las tarjetas **no están escritas a mano**: JavaScript las construye a partir de los datos en `js/datos.js`,
y se pueden filtrar por tipo, buscar por nombre o municipio y ordenar por nombre, precio o duración.

- **Aprendiz:** Santiago Vélez Valencia
- **Ficha:** 3349882 · Tecnólogo en Análisis y Desarrollo de Software · SENA CDITI
- **Sitio publicado (GitHub Pages):** https://santiago2007-arch.github.io/rutas-eje-cafetero/ (pendiente de activar GitHub Pages)

- **Lo que aprendí:** ver [APRENDIZAJES.md](APRENDIZAJES.md)

## Tecnologías
- HTML semántico + Bootstrap 5.3 (CDN): navbar con collapse, btn-group, cards y grilla
- CSS propio con variables (`css/estilos.css`) como guía de estilo
- JavaScript: arreglos de objetos, `map()`, `filter()`, template literals, eventos y `sort()`

## Guía de estilo
| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `--eje-primario` | `#1f5f3a` | Botones y acentos | Blanco encima: 7.62:1 |
| `--eje-secundario` | `#38251c` | Navbar y pie | Blanco encima: 14.49:1 |
| `--eje-fondo` | `#faf6ee` | Fondo de la página | - |
| `--eje-texto` | `#2b2118` | Texto general | Sobre el fondo: 14.61:1 |
| `--eje-fuente` | `"Segoe UI", system-ui, sans-serif` | Toda la página | - |

## Cómo verificar
```bash
node --test
```

## Estructura
```
index.html        página principal
css/estilos.css   guía de estilo (variables) + personalización de Bootstrap
js/datos.js       los datos: arreglo de rutas
js/app.js         la lógica: datos → tarjetas, filtros y eventos
tests/            pruebas automáticas (no modificar las 1-4)
APRENDIZAJES.md   mis explicaciones de cómo funciona cada parte
img/              ilustraciones
```

## Ordenamiento
El selector permite ordenar por nombre, precio o duración, combinando la opción elegida con los filtros y la búsqueda. Se usa una copia del arreglo para no modificar los datos originales.
