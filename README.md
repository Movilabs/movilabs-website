# Movilabs Landing

Landing institucional oficial de Movilabs, construida con Next.js App Router, TypeScript y Tailwind CSS.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Sin backend, base de datos, CMS ni variables de entorno

## Nombre de repositorio sugerido

`movilabs-landing`

## Ejecutar en local

1. Instalar dependencias:

```bash
npm install
```

2. Levantar entorno de desarrollo:

```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000)

## Build de producción

```bash
npm run build
npm run start
```

## Subir a GitHub (organización Movilabs)

1. Crear un repositorio nuevo dentro de la organización `Movilabs`.
2. Nombre recomendado: `movilabs-landing`.
3. Ejecutar:

```bash
git init
git add .
git commit -m "Rediseño landing institucional Movilabs"
git branch -M main
git remote add origin git@github.com:Movilabs/movilabs-landing.git
git push -u origin main
```

Si preferís HTTPS:

```bash
git remote add origin https://github.com/Movilabs/movilabs-landing.git
```

## Deploy en Vercel

1. Ingresar a Vercel con `maxi.cuesta@movilabs.app`.
2. Click en **Add New Project** e importar `Movilabs/movilabs-landing`.
3. Confirmar preset **Next.js**.
4. Este MVP no requiere variables de entorno.
5. Deploy.

## Notas de branding

- El color base de marca se apoya en `#0F172A`.
- Los tokens semánticos están en [`app/globals.css`](app/globals.css).
- Cuando la paleta oficial final esté definida, reemplazar únicamente esos tokens.

## Rutas incluidas

- `/` Landing institucional
- `/privacy` Política de privacidad en español

## MVP actual

- Rediseño visual minimalista premium con estética sobria y tecnológica
- Header sticky refinado, hero mejor jerarquizado y CTA más cuidado
- Secciones: Hero, Sobre Movilabs, Contacto y Footer
- Política de privacidad lista como base institucional para requisitos futuros de Apple
- SEO básico: metadata, Open Graph, `sitemap.xml` y `robots.txt`

## Mejoras futuras posibles

- Agregar página de Términos y Condiciones
- Incorporar imagen OG dedicada para compartir en redes
- Añadir analítica liviana solo cuando sea necesario
- Implementar chequeos visuales end-to-end
