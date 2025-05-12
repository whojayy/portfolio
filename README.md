# Jay Mewada - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark/light mode toggle
- Interactive project showcase
- Skills and experience sections
- Contact form
- Downloadable resume

## Deployment on GitHub Pages

This portfolio is configured for easy deployment on GitHub Pages. Follow these steps to deploy:

1. Fork or clone this repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Make any desired changes to personalize the portfolio
4. Build the static site:
   \`\`\`bash
   npm run build
   \`\`\`
5. Deploy to GitHub Pages:
   - Create a new repository on GitHub
   - Push your code to the repository
   - Go to Settings > Pages
   - Select the "GitHub Actions" as the source
   - Create a new workflow file (or use the provided one in `.github/workflows/deploy.yml`)

## GitHub Actions Workflow

Create a file at `.github/workflows/deploy.yml` with the following content:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
\`\`\`

## Local Development

To run the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

- Update personal information in the components
- Add or remove projects in the `projects.tsx` file
- Modify the resume HTML file in `public/resume.html`
- Change the color scheme in `tailwind.config.ts`

## Technologies Used

- Next.js
- React
- Tailwind CSS
- TypeScript
- shadcn/ui components
