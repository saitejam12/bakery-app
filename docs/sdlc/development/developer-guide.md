# Developer Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start status -->
_Up to date._
<!-- sdlc:auto:end status -->

<!-- sdlc:auto:start source -->
Generated from commit `36ad041` · model `claude-sonnet-5`
<!-- sdlc:auto:end source -->

<!-- sdlc:auto:start overview -->
Bakery App - sonartest is a generated two-application repository: a Vite + React 19 single-page frontend containing approved, reviewed screens that currently render seeded sample data, and a FastAPI 0.115 backend scaffold that only exposes a health check endpoint (no architecture had been approved for it yet). The backend uses SQLAlchemy 2.0 with a SQLite database by default (swappable via DATABASE_URL, e.g. to the PostgreSQL 16 container defined in docker-compose.yml), and the frontend talks to the backend through a typed fetch wrapper that is not yet wired into any screen.
<!-- sdlc:auto:end overview -->

<!-- sdlc:auto:start prerequisites -->
- Node.js (for the frontend, Vite 6 / React 19 toolchain)
- Python 3.12
- pip
- Docker and Docker Compose (optional, for the PostgreSQL 16 service in docker-compose.yml)
<!-- sdlc:auto:end prerequisites -->

<!-- sdlc:auto:start setup -->
1. Clone the repository
2. cd frontend && npm install
3. cd backend && pip install -r requirements.txt
4. (optional) copy .env.example to .env and adjust values such as DATABASE_URL / ALLOWED_ORIGINS
5. (optional) docker-compose up -d to start the Postgres 16 database if not using the default SQLite file
<!-- sdlc:auto:end setup -->

<!-- sdlc:auto:start run -->
| Name | Command | Description |
|---|---|---|
| frontend dev | `npm run dev` | Starts the Vite dev server for the React SPA (run from frontend/) |
| frontend build | `npm run build` | Bundles the frontend with Vite; does not typecheck |
| frontend preview | `npm run preview` | Serves the production build locally |
| backend dev | `uvicorn app.main:app --reload` | Runs the FastAPI backend with auto-reload (run from backend/); creates SQLite tables on startup |
| db up | `docker-compose up -d` | Starts the PostgreSQL 16 container defined in docker-compose.yml |
<!-- sdlc:auto:end run -->

<!-- sdlc:auto:start structure -->
| Path | Purpose |
|---|---|
| `.devcontainer/` | VS Code devcontainer configuration |
| `backend/` | FastAPI service: app package, models/schemas, routers, tests, Dockerfile, requirements |
| `backend/app/` | Application code: main.py entrypoint, database.py engine/session setup, models.py, schemas.py, routers/ |
| `backend/tests/` | Pytest test suite (currently health check and conftest) |
| `frontend/` | Vite + React SPA: source, config, e2e tests |
| `frontend/src/` | Application source: main.tsx entry, lib/ (api client, ui, icons, navigate), index.css |
| `frontend/e2e/` | Playwright acceptance specs |
| `docker-compose.yml` | Defines the PostgreSQL 16 database service for local development |
| `.quorq/` | Quorq platform metadata (handoff.json) |
| `.env.example` | Template for environment variables |
<!-- sdlc:auto:end structure -->

<!-- sdlc:auto:start conventions -->
- Backend routes follow a 'one router per architecture component' pattern (backend/app/routers/)
- Unimplemented backend endpoints return a typed StubResponse placeholder rather than raising, keeping the OpenAPI schema complete before handlers are written
- Database tables are created from SQLAlchemy models at app startup (Base.metadata.create_all in the lifespan handler), not via migrations
- DATABASE_URL env var controls the backend database; defaults to local SQLite (sqlite:///./app.db) so the app runs with no external DB
- CORS origins are controlled via the ALLOWED_ORIGINS env var (comma-separated), falling back to the Vite dev server origins
- Frontend screens are generated against a shared component/icon vocabulary (src/lib/ui.tsx, src/lib/icons.tsx) and a brand token/CSS-variable system (src/index.css)
- Frontend API access is centralized in src/lib/api.ts (apiFetch) using a bearer token (session token or shared API_SECRET_KEY) and VITE_API_BASE_URL; screens do not yet call it, running on seeded data instead
- Vitest component tests live beside the components they test; Playwright e2e specs live in frontend/e2e/
<!-- sdlc:auto:end conventions -->

<!-- sdlc:auto:start testing -->
| Name | Command | Description |
|---|---|---|
| frontend unit tests | `npm test` | Runs Vitest component tests (vitest run --passWithNoTests) |
| frontend lint | `npm run lint` | Runs ESLint over the frontend app; used as a development gate |
| frontend typecheck | `npm run typecheck` | Runs tsc --noEmit (not run by npm run build) |
| frontend format check | `npm run format:check` | Checks formatting with Prettier |
| frontend e2e install | `npm run test:e2e:install` | Installs the Chromium browser for Playwright |
| frontend e2e | `npm run test:e2e` | Runs Playwright acceptance tests; boots the backend and a built frontend preview unless E2E_BASE_URL is set |
| backend tests | `pytest` | Runs backend unit tests (pytest.ini sets pythonpath=. and testpaths=tests) |
| backend lint | `ruff check .` | Lints the backend code with Ruff |
| backend format | `ruff format .` | Formats the backend code with Ruff |
<!-- sdlc:auto:end testing -->

<!-- sdlc:auto:start troubleshooting -->
| Problem | Solution |
|---|---|
| Backend fails to start or create tables against a real database | Set DATABASE_URL to a reachable database (e.g. the docker-compose Postgres service); the default sqlite:///./app.db requires nothing but works only locally |
| Frontend calls to the backend are blocked by CORS | Set ALLOWED_ORIGINS on the backend to the frontend's origin (comma-separated for multiple); otherwise only localhost:5173/127.0.0.1:5173 are allowed |
| `pytest` run from backend/ can't import app | Run pytest from the backend/ directory so pytest.ini's pythonpath=. applies, or ensure the backend package is on PYTHONPATH |
| Playwright e2e tests fail to launch a browser | Run npm run test:e2e:install first to fetch Chromium |
| `npm run build` succeeds but the app has type errors | Run npm run typecheck (tsc --noEmit) separately, since build does not typecheck |
<!-- sdlc:auto:end troubleshooting -->
