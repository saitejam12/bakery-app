<!-- sdlc:auto:start adr -->
# ADR-0002: Use FastAPI 0.115 for Backend

Status: Accepted  
Date: 2026-11-11

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v1.

## Considered Options

- FastAPI 0.115
- Django REST Framework
- Flask

## Decision Outcome

Chosen option: FastAPI 0.115, because Produces the clean REST/JSON API the kiosk and the future tracking app consume, with automatic OpenAPI docs that let another team integrate the read-only orders feed without the original authors. Handles transactional token issuance and S3 uploads at this modest scale.

## Consequences

Minimal batteries-included tooling means auth sessions and admin screens are assembled from focused libraries rather than a built-in admin, which suits this lightweight scope.
<!-- sdlc:auto:end adr -->