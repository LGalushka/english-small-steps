# English Small Steps

A responsive English lesson catalog for A1–A2 learners.
Browse short lessons, search by title, and filter by category.
Each lesson links to a post in the English Small Steps Lab Telegram channel.

## Features

- Search lessons by title
- Filter lessons by category
- View lesson covers and descriptions
- Open lessons in Telegram
- Responsive layout for mobile and desktop
- Empty state when no lessons match

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- Python and Pillow for image preparation

## Getting Started

Install Node.js and npm, then run:

```bash
git clone https://github.com/LGalushka/english-small-steps.git
cd english-small-steps
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Production Build

Create a production build:

```bash
npm run build
```

Preview it locally:

```bash
npm run preview
```

The build output is generated in the `dist` directory.

## Project Structure

- `src/components/` — UI components and their styles
- `src/data/` — lesson data
- `src/assets/` — images and icons
- `public/` — static files, including the favicon
- `scripts/` — Python scripts for preparing images

## Image Optimization

Images were resized with Pillow, and lesson covers were converted
to WebP. The combined size of the bundled images decreased from
approximately 18.2 MB to 0.96 MB.

Python is only used to prepare images. It is not required to run
or build the website.

## Learning Goals

This project was built to practice React components, TypeScript
props, state management, filtering, responsive CSS, and image
optimization.

## Telegram Channel

[English Small Steps Lab](https://t.me/english_small_steps_lab)
