# Instrucciones para agentes — Sitio Movilabs

Este archivo es la fuente común para Codex, Claude Code y cualquier otro agente
que trabaje en este repositorio. `CLAUDE.md` importa estas reglas para evitar dos
contratos diferentes.

El repositorio contiene la landing institucional de Movilabs y las páginas
legales y de soporte de sus productos. Está construido con Next.js, TypeScript y
Tailwind CSS. Los enlaces públicos de privacidad, términos y soporte forman parte
de las declaraciones de las tiendas móviles; romperlos puede bloquear un release.

## Antes de modificar

1. Leer la solicitud completa y revisar `README.md`.
2. Ejecutar `git status` y comprobar la rama y los cambios existentes.
3. Inspeccionar las rutas, componentes y traducciones afectados antes de editar.
4. Confirmar qué URLs públicas o aplicaciones dependen del cambio.
5. No sobrescribir ni incluir cambios ajenos al alcance.

## Reglas de trabajo

- Nunca trabajar directamente en `main`; usar una rama y un pull request.
- Mantener equivalentes las páginas y la navegación en español, inglés y
  portugués cuando el contenido aplique a los tres idiomas.
- Conservar estables las URLs legales y de soporte ya publicadas. Cualquier
  redirección, eliminación o cambio de significado requiere decisión explícita.
- No inventar afirmaciones legales, de privacidad, seguridad o producto. Verificar
  el contrato vigente del producto correspondiente.
- No agregar analítica, cookies, formularios, SDK, dependencias o salidas de red
  sin autorización explícita y revisión de privacidad.
- No guardar credenciales, tokens, archivos `.env`, datos personales ni capturas
  de consolas autenticadas en Git.
- No mezclar una actualización de contenido con refactors o cambios visuales no
  solicitados.

## Verificación

Para cambios que puedan afectar el sitio ejecutable:

```bash
npm ci
npm run build
```

Ejecutar también las comprobaciones específicas disponibles para el área
modificada. Un cambio exclusivamente documental debe superar al menos
`git diff --check`.

No afirmar que una URL desplegada, un dominio, una redirección o una integración
externa fue verificada si sólo se comprobó el repositorio local.

## Git y relevo

- Ramas: `feat/<tema>`, `fix/<tema>`, `docs/<tema>` o `chore/<tema>`.
- Commits: Conventional Commits.
- Un agente es responsable de una rama a la vez; Codex y Claude no deben editar
  simultáneamente la misma rama.
- Antes de cerrar una sesión, dejar el árbol limpio o explicar los archivos
  pendientes, las pruebas realizadas y el siguiente paso.
- Sólo el responsable humano aprueba y fusiona pull requests o autoriza cambios
  externos irreversibles.
