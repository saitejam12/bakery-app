<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Accepted  
Date: 2026-11-11

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- React 19
- Vue
- Svelte

## Decision Outcome

Chosen option: React 19, because Drives the touch-friendly, state-heavy kiosk UI where the cart updates live as customers tap items, options and quantities, and resizes responsively to whatever tablet or kiosk screen the bakery mounts (NFR-001). Built as a static SPA served from its own origin, calling the API with a stored bearer token.

## Consequences

A SPA needs its own static hosting and an explicit API base URL (VITE_API_BASE_URL) since it shares no origin with the API; acceptable for a single-location kiosk.
<!-- sdlc:auto:end adr -->