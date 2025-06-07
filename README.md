# ConstructionMarketplace

This repository is organized as an npm workspace. The `frontend` package contains the Next.js application.

## Available Scripts

Run these commands from the repository root:

- `npm run dev:frontend` &mdash; start the frontend development server.
- `npm run build:frontend` &mdash; build the frontend for production.
- `npm run start:frontend` &mdash; run the production build.
- `npm run lint:frontend` &mdash; lint the frontend source.

The scripts delegate to the `frontend` package using the `--prefix` flag so you do not need to change directories.

Feel free to add more workspaces under the `workspaces` field in `package.json` as the project grows.