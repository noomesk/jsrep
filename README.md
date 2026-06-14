# jsrep — Repaso de JavaScript puro

Este repositorio es un repaso práctico de JavaScript puro (vanilla JS). Contiene ejemplos y ejercicios cortos organizados por temas básicos para practicar variables, tipos, operadores y control de flujo.

## Estructura

- `index.html` — página de demostración principal.
- `app.js` — script principal (si aplica).
- `01-tipos/` — variables, tipos primitivos, constantes, objetos, arrays, funciones.
- `02-operadores/` — operadores aritméticos, asignación, comparación, lógicos, ternario, bitwise.
- `03-control-flujo/` — condicionales y bucles (`if`, `while`, `for`, `for...of`, etc.).

Cada archivo contiene ejemplos y comentarios; ábrelos en el editor o en el navegador y prueba cambios en la consola.

## Cómo usar

- Abrir `index.html` en el navegador (doble clic o servidor local).

Si quieres un servidor local rápido:

```bash
npx http-server . -p 8080
```

o, si usas la extensión Live Server de VS Code, haz clic en "Go Live".

## Contenido principal

- Tipos y variables: `01-tipos/*.js` — repasa `let`, `const`, tipos primitivos, objetos y arrays.
- Operadores: `02-operadores/*.js` — repasa precedencia y casos comunes.
- Control de flujo: `03-control-flujo/*.js` — repasa condicionales y bucles con ejemplos prácticos.

## Ejercicios sugeridos

- Modifica ejemplos y observa la consola del navegador.
- Añade funciones que transformen arrays y objetos (usa `for`, `for...of`).
- Implementa pequeñas utilidades: validaciones, contadores, filtros.

## Recursos recomendados

- MDN Web Docs (JavaScript): https://developer.mozilla.org/
- FreeCodeCamp (JS Básico): https://www.freecodecamp.org/

## Contribuir

- Haz cambios locales, prueba en el navegador y abre un pull request si quieres compartir mejoras.

---

Pequeño repaso para volver a coger soltura con JavaScript puro. ¡A practicar!

## Progreso actual

- **Control de flujo:** ejemplos en `03-control-flujo/` hasta `10-switch.js` — incluye `for-in`, `for-of`, `break/continue` y `switch`.
- **Funciones y ejercicios:** `04-ejercicios/01.js` — ejercicio en curso: implementar `cualEsMayor(a, b)` para devolver (con `return`) el número mayor.
- **Cómo probar:** abrir `index.html` o usar Live Server / `npx http-server . -p 8080` y revisar la consola del navegador.
- **Siguientes pasos:** completar los ejercicios en `04-ejercicios/`, repasar ejemplos de bucles y condicionales, y, si se quiere publicar, revisar la configuración de `git`/remotos.