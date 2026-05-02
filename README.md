# priyankakukreja.com

Personal site of Priyanka Kukreja — Product Leader at CodeRabbit, writing on AI, strategy, product, technology, and life.

Built with [Astro](https://astro.build), Tailwind, and MDX. Deployed to GitHub Pages on every push to `main`, served at the custom domain `priyankakukreja.com`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Authoring

- Essays: drop a Markdown file in `src/content/writing/` with this frontmatter:

  ```yaml
  ---
  title: "Your title"
  description: "One-line summary."
  date: 2026-05-01
  topic: AI            # AI | Strategy | Product | Technology | Life
  draft: false
  ---
  ```

- Products: drop a file in `src/content/products/` with `title`, `description`, `date`, optional `loomUrl`, optional `link`.

## Deploy

`main` builds and publishes via `.github/workflows/deploy.yml`. The custom domain is set with `public/CNAME` and matching DNS records at the registrar.
